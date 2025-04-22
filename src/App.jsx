import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import MoodSelector from './components/MoodSelector';
import WeatherDisplay from './components/WeatherDisplay';
import NotesList from './components/NotesList';
import 'react-calendar/dist/Calendar.css';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [weather, setWeather] = useState({ temp: 25 });
  const [showNotes, setShowNotes] = useState(false);

  const handleSave = () => {
    if (!selectedMood) return;
    
    const newNote = {
      date: format(currentDate, 'MMM dd, yyyy'),
      mood: selectedMood,
      note,
      weather: weather.temp
    };
    
    setNotes([newNote, ...notes]);
    setNote('');
    setSelectedMood(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ff9a9e] to-[#fad0c4] p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold text-gray-800">MoodMate</h1>
            <WeatherDisplay weather={weather} />
          </div>
          
          {!showNotes ? (
            <div className="flex gap-6">
              <div className="flex-1">
                <div className="bg-white rounded-lg p-4 mb-4">
                  <h2 className="text-lg font-medium mb-2">
                    {format(currentDate, 'MMMM dd, yyyy')}
                  </h2>
                  <p className="text-gray-600 mb-3">How are you feeling today?</p>
                  
                  <MoodSelector 
                    selectedMood={selectedMood}
                    onMoodSelect={setSelectedMood}
                  />
                  
                  <textarea
                    className="w-full mt-4 p-2 border rounded-lg"
                    placeholder="Add a note..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                  
                  <button
                    className="w-full mt-4 bg-[#ff9a9e] text-white py-2 rounded-lg"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </div>
              </div>
              
              <div className="flex-1">
                <Calendar
                  value={currentDate}
                  onChange={setCurrentDate}
                  className="rounded-lg border-none shadow-sm"
                />
              </div>
            </div>
          ) : (
            <NotesList notes={notes} />
          )}
          
          <button
            className="w-full mt-4 bg-white text-gray-800 py-2 rounded-lg border"
            onClick={() => setShowNotes(!showNotes)}
          >
            {showNotes ? 'Back to Journal' : 'All Notes'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;