import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Cloud, MapPin, Moon } from 'lucide-react-native';

export default function ClockScreen() {
  const [time, setTime] = useState(new Date());
  const [location] = useState('Philipines');

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <View style={styles.container}>
      <View style={styles.clockContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <MapPin color='#777777' size={18} />
            <Text style={styles.location}>{location}</Text>
        </View>
        <Text style={styles.time}>
          {time.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          })}
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.greeting}>{getGreeting()}</Text>
        <View style={styles.iconContainer}>
          <Moon size={24} color="#777777" />
          <Cloud size={24} color="#777777" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  location: {
    fontSize: 16,
    color: '#777777',
  },
  time: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#777777',
  },
  clockContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#777777',
  },
  footer: {
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#777777',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#777777',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 8,
    color: '#777777',
  },
});

