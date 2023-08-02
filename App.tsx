/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Linking} from 'react-native';

const useInitialURL = () => {
  const [initialURL, setInitialURL] = useState('');
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const fetchInitialURL = async () => {
      try {
        const url = await Linking.getInitialURL();
        if (url) {
          console.log({coldStart: url});
          setInitialURL(url);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsProcessing(false);
      }
    };
    fetchInitialURL();
  }, []);
  return [initialURL, isProcessing];
};

const useLinkingURL = () => {
  const [linkingUrl, setLinkingUrl] = useState('');

  useEffect(() => {
    const onLinkingEvent = async event => {
      if (event.url) {
        console.log({warmStart: event.url});
        setLinkingUrl(event.url);
      }
    };
    Linking.addEventListener('url', onLinkingEvent);
    return () => Linking.removeAllListeners('url');
  }, []);
  return linkingUrl;
};

function App(): JSX.Element {
  const [initialURL, isProcessing] = useInitialURL();
  const linkingUrl = useLinkingURL();

  return (
    <SafeAreaView
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20}}>Open app from</Text>
      <Text>{`Cold Start: ${initialURL}`}</Text>
      <Text>{`Warm Start: ${linkingUrl}`}</Text>
    </SafeAreaView>
  );
}

export default App;
