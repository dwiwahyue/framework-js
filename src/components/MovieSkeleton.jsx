const SkeletonCard = () => {
  return (
    <div className="flex flex-row gap-6 overflow-auto">
      <div className="bg-white rounded-lg p-4 shadow animate-pulse w-50 h-75">
        <div className="bg-gray-300 h-40 rounded mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow animate-pulse w-50 h-75">
        <div className="bg-gray-300 h-40 rounded mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow animate-pulse w-50 h-75">
        <div className="bg-gray-300 h-40 rounded mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow animate-pulse w-50 h-75">
        <div className="bg-gray-300 h-40 rounded mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
      </div>
      <div className="bg-white rounded-lg p-4 shadow animate-pulse w-50 h-75">
        <div className="bg-gray-300 h-40 rounded mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow animate-pulse w-50 h-75">
        <div className="bg-gray-300 h-40 rounded mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow animate-pulse w-50 h-75">
        <div className="bg-gray-300 h-40 rounded mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow animate-pulse w-50 h-75">
        <div className="bg-gray-300 h-40 rounded mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
      </div>
    </div>
  );
};

const SkeletonDetail = () => {
  return (
    <div>
      <div className="flex flex-row animate-pulse">
        <div className="h-55 w-1/3 bg-gray-300"></div>
        <div className="flex flex-col">
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-300 rounded w-full mb-1"></div>
        </div>
      </div>
      <SkeletonCard />
    </div>
  );
};

export { SkeletonCard, SkeletonDetail };
