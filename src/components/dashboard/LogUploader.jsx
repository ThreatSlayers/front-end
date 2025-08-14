const LogUploader = () => {
  return (
    <div className="bg-card-dark rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-accent-blue">📤</span>
          <h2 className="text-xl font-semibold">System Log Upload</h2>
        </div>
        <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-accent-blue rounded text-sm">Upload</span>
      </div>
      
      <div className="mb-4">
        <textarea 
          className="w-full h-32 bg-base-dark rounded-lg p-4 text-gray-300 resize-none"
          placeholder="Paste your Event Viewer logs here for analysis..."
        />
      </div>

      <div className="flex justify-between">
        <button className="px-4 py-2 border border-accent-blue text-accent-blue rounded hover:bg-accent-blue hover:bg-opacity-10">
          Get File Suggestion
        </button>
        <button className="px-4 py-2 bg-accent-blue rounded text-white">
          Start AI Analysis
        </button>
      </div>
    </div>
  )
}

export default LogUploader