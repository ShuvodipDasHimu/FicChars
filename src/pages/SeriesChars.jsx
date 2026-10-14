import React from "react";
import CharacterCard from "../components/CharacterCard";
import useCharacters from "../hooks/useCharacters";

const SeriesChars = () => {
  const { chars, loading, error } = useCharacters("series");

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (error) {
    return (
      <p className="p-6 text-center text-error">Could not load characters.</p>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl p-3 sm:p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {chars.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            sourceLabel="Series"
          />
        ))}
      </div>
    </div>
  );
};

export default SeriesChars;
