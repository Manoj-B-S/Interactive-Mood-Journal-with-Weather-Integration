import React from 'react';

function NotesList({ notes }) {
  return (
    <div className="space-y-3">
      {notes.map((note, index) => (
        <div
          key={index}
          className="bg-gray-50 rounded-lg p-4"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-2xl">{note.mood}</span>
            <div className="text-sm text-gray-500">
              {note.date} • {note.weather}°C
            </div>
          </div>
          <p className="text-gray-700">{note.note}</p>
        </div>
      ))}
    </div>
  );
}

export default NotesList;