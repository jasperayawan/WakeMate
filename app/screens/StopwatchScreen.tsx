import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function StopwatchScreen() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  const handleStartStop = () => {
    if (isRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    } else {
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    setTime(0);
    setIsRunning(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{formatTime(time)}</Text>
      </View>

     <View style={{ flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <Pressable
            style={[styles.button, isRunning && styles.buttonRunning]}
            onPress={handleStartStop}
        >
            <Text style={styles.buttonText}>
            {isRunning ? 'Stop' : 'Start'}
            </Text>
        </Pressable>
        <Pressable style={styles.buttonReset} onPress={handleReset}>
            <Text style={styles.buttonTextReset}>Reset</Text>
        </Pressable>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  time: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'monospace',
  },
  button: {
    backgroundColor: '#1e1e1e',
    paddingHorizontal: 52,
    paddingVertical: 16,
    borderRadius: 8,
  },
  buttonReset: {
    borderColor: '#1e1e1e',
    borderWidth: 1,
    paddingHorizontal: 48,
    paddingVertical: 14,
    borderRadius: 8,
  },
  buttonTextReset: {
    color: '#1e1e1e',
    fontSize: 18,
    fontWeight: '500',
  },
  buttonRunning: {
    backgroundColor: '#666',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});

