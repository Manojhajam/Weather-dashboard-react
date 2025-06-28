import React from 'react'

const Loader = () => {
  return <div>
      <div className="flex flex-wrap gap-4 p-4">
        <div className="animate-pulse w-[200px] h-[160px] bg-gray-200 rounded-lg p-4 flex flex-col justify-between">
          <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto" />
          <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mt-2" />
          <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto" />
        </div>

        <div className="animate-pulse flex-1 grid grid-cols-3 gap-4 h-[160px] bg-gray-200 rounded-lg p-4">
          {Array(6)
            .fill(0)
            .map((_, i) =>
              <div key={i} className="flex flex-col items-center space-y-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full" />
                <div className="w-12 h-3 bg-gray-300 rounded" />
                <div className="w-8 h-3 bg-gray-300 rounded" />
              </div>
            )}
        </div>
      </div>

      <div className="p-4">
        <div className="flex gap-3 overflow-x-auto">
          {Array(12)
            .fill(0)
            .map((_, i) =>
              <div
                key={i}
                className="animate-pulse w-[150px] h-[160px] bg-gray-200 rounded-lg p-2 flex flex-col items-center justify-between"
              >
                <div className="w-10 h-10 bg-gray-300 rounded-full" />
                <div className="w-16 h-4 bg-gray-300 rounded" />
                <div className="w-10 h-3 bg-gray-300 rounded" />
                <div className="w-12 h-3 bg-gray-300 rounded" />
              </div>
            )}
        </div>
    </div>
    
    
      <div className="p-4">
        <div className="flex gap-3 overflow-x-auto">
          {Array(12)
            .fill(0)
            .map((_, i) =>
              <div
                key={i}
                className="animate-pulse w-[150px] h-[160px] bg-gray-200 rounded-lg p-2 flex flex-col items-center justify-between"
              >
                <div className="w-10 h-10 bg-gray-300 rounded-full" />
                <div className="w-16 h-4 bg-gray-300 rounded" />
                <div className="w-10 h-3 bg-gray-300 rounded" />
                <div className="w-12 h-3 bg-gray-300 rounded" />
              </div>
            )}
        </div>
      </div>
    </div>;
}

export default Loader
