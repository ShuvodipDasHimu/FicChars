const CharacterCard = ({ character, sourceLabel = "Series" }) => {
  return (
    <article className="flex h-full flex-col items-center gap-3 rounded-xl border border-base-300 bg-base-200 p-4 text-base-content shadow-md ring-1 ring-base-300 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:gap-4 sm:p-6">
      <img
        className="aspect-[3/4] w-full max-w-[180px] rounded-lg object-cover sm:max-w-[200px]"
        src={character.appearance.image_url}
        alt={character.name}
      />
      <div className="w-full space-y-1 text-center text-sm sm:text-base">
        <h2 className="text-lg font-semibold">{character.name}</h2>
        <p>
          <span className="opacity-70">{sourceLabel}: </span>
          {character.series}
        </p>
        {character.aliases?.[0] && (
          <p>
            <span className="opacity-70">Alias: </span>
            {character.aliases[0]}
          </p>
        )}
      </div>
    </article>
  );
};

export default CharacterCard;
