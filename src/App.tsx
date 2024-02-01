import React, { useState } from 'react';
import 'bulma';
import { peopleFromServer } from './data/people';
import { Autocomplete } from './components/Autocomplete';

export const App: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);

  return (
    <main className="section">
      {selectedPerson && (
        peopleFromServer.map((person) => {
          if (person.name === selectedPerson) {
            return (
              <h1 className="title" key={selectedPerson}>
                {`${person.name} (${person.born} - ${person.died})`}
              </h1>
            );
          }

          return null;
        })
      )}

      {!selectedPerson && (
        <h1 className="title">
          No selected person
        </h1>
      )}

      <Autocomplete onSelected={(person) => setSelectedPerson(person)} />
    </main>
  );
};
