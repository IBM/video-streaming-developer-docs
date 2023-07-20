import React, { useState, useEffect, useRef } from 'react';
import { Form, FormGroup, TextInput, TextArea, Button } from '@carbon/react';
import md5 from 'md5';
import Notification from './Notification';

const HashAuthenticationTest = () => {
  const [secret, setSecret] = useState('');
  const [json, setJson] = useState('');
  const [jsonError, setJsonError] = useState(null);
  const [secretError, setSecretError] = useState(null);
  const [success, setSuccess] = useState(null);

  const validateSecret = () => {
    if (secret === '') {
      setSecretError('This channel secret key is required');
      return false;
    }

    setSecretError(null);

    return true;
  };

  const getHashObject = (parsedJson) => {
    const hashArray = parsedJson.filter((obj) => obj.hash);

    if (hashArray.length) {
      return hashArray[0];
    }

    return false;
  };

  const validateJson = () => {
    let parsedJson;

    try {
      parsedJson = JSON.parse(json);
    } catch (e) {
      setJsonError('Not valid JSON.');
      return false;
    }

    if (!Array.isArray(parsedJson)) {
      setJsonError('Not an array');
      return false;
    }

    const hashObject = getHashObject(parsedJson);

    if (!hashObject) {
      setJsonError('No hash provided');
      return false;
    }

    setJsonError(null);

    return true;
  };

  const validateForm = () => {
    const secretIsValid = validateSecret();
    const jsonIsValid = validateJson();

    return secretIsValid && jsonIsValid;
  };

  const submit = (e) => {
    e.preventDefault();

    const formIsValid = validateForm();

    if (!formIsValid) {
      return false;
    }

    const parsedJson = JSON.parse(json);
    const inputHashObject = getHashObject(parsedJson);

    const hashData = parsedJson.filter((obj) => !obj.hash).map((obj) => Object.values(obj)[0]);

    if (inputHashObject.hashExpire) {
      hashData.push(inputHashObject.hashExpire);
    }

    hashData.push(secret);

    const generatedHash = md5(hashData.join('|')).toLowerCase();

    if (inputHashObject.hash !== generatedHash && inputHashObject.hash.toLowerCase() === generatedHash) {
      setSuccess(false);
      return;
    }

    if (inputHashObject.hash === generatedHash) {
      setSuccess(true);
      return;
    }

    setSuccess(false);
  };

  return (
    <Form onSubmit={submit}>
      <FormGroup>
        <TextInput
          id="ChannelSecret"
          invalid={!!secretError}
          invalidText={secretError}
          labelText="Channel Secret Key"
          placeholder="28e55ffa9bbd9a18dccde7f8a8d8cca"
          onChange={(e) => setSecret(e.target.value)}
          onFocus={(e) => setSecret(e.target.value)}
          onBlur={(e) => setSecret(e.target.value)}
          light
        />
      </FormGroup>
      <FormGroup>
        <TextArea
          cols={50}
          id="AuthenticationHash"
          invalid={!!jsonError}
          invalidText={jsonError}
          labelText="JSON object with authentication hash"
          placeholder='[{"user":"user@example.com"},{"hash":"0253acee466a26b0327617b55851116e"},{"hashExpire":1520694398}]'
          onChange={(e) => setJson(e.target.value)}
          onFocus={(e) => setJson(e.target.value)}
          onBlur={(e) => setJson(e.target.value)}
          rows={4}
          light
        />
      </FormGroup>
      <Button kind="primary" tabIndex={0} type="submit">
        Run authentication test
      </Button>

      <Notification isSuccess={success} setSuccess={setSuccess} />
    </Form>
  );
};

export default HashAuthenticationTest;
