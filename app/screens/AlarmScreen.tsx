import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Pressable } from 'react-native';
import { Plus } from 'lucide-react-native';

interface Alarm {
  id: string;
  time: string;
  label: string;
  enabled: boolean;
}

export default function AlarmScreen() {
  const [alarms] = useState<Alarm[]>([
    { id: '1', time: '05:00 AM', label: 'Prayer', enabled: true },
    { id: '2', time: '06:30 AM', label: 'Morning Exercise', enabled: true },
    { id: '3', time: '09:00 PM', label: 'Programming Study', enabled: true },
    { id: '4', time: '13:00 PM', label: 'Online Class', enabled: false },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Set Alarm</Text>
        <Pressable style={styles.addButton}>
          <Plus size={24} color="#000" />
        </Pressable>
      </View>

      <View style={styles.timeContainer}>
        <Text style={styles.currentTime}>00:00</Text>
        <View style={styles.amPmContainer}>
          <Text style={styles.amPm}>AM</Text>
          <Text style={styles.amPm}>PM</Text>
        </View>
      </View>

      <View style={styles.alarmList}>
        <Text style={styles.sectionTitle}>Upcoming Alarm</Text>
        {alarms.map((alarm) => (
          <View key={alarm.id} style={styles.alarmItem}>
            <View>
              <Text style={styles.alarmLabel}>{alarm.label}</Text>
              <Text style={styles.alarmTime}>{alarm.time}</Text>
            </View>
            <Switch
              value={alarm.enabled}
              onValueChange={() => {}}
              trackColor={{ false: '#767577', true: '#1e1e1e' }}
              thumbColor="#fff"
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
    color: '#777777'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#777777'
  },
  addButton: {
    padding: 8,
    color: '#777777'
  },
  timeContainer: {
    alignItems: 'center',
    marginVertical: 40,
    color: '#777777'
  },
  currentTime: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#777777'
  },
  amPmContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 8,
    color: '#777777'
  },
  amPm: {
    fontSize: 16,
    color: '#777777'
  },
  alarmList: {
    flex: 1,
    color: '#777777'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 16,
    color: '#777777'
  },
  alarmItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#777777',
    color: '#777777'
  },
  alarmLabel: {
    fontSize: 16,
    marginBottom: 4,
    color: '#777777'
  },
  alarmTime: {
    fontSize: 14,
    color: '#777777'
  },
});

