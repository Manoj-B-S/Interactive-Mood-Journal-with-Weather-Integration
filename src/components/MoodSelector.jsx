import React from 'react';

const moods = [
  { emoji: '😊', label: 'Happy' },
  { emoji: '😐', label: 'Neutral' },
  { emoji: '😢', label: 'Sad' },
  { emoji: '😡', label: 'Angry' },
  { emoji: '😴', label: 'Tired' }
];

function MoodSelector({ selectedMood, onMoodSelect }) {
  return (
    <div className="flex justify-between">
      {moods.map((mood) => (
        <button
          key={mood.label}
          className={`text-2xl p-2 rounded-full transition-transform hover:scale-110 
            ${selectedMood === mood.emoji ? 'bg-gray-100 scale-110' : ''}`}
          onClick={() => onMoodSelect(mood.emoji)}
        >
          {mood.emoji}
        </button>
      ))}
    </div>
  );
}

export default MoodSelector;