import { useState } from 'react';

export default function ImageUpload({image,setImage}) {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload an image file');
    }
  }
};

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  return (
    <div className=" ml-4 w-1/2 h-1/2 mt-4 max-w-2xl mx-auto p-8">
      <div className="flex items-center gap-6 pb-6">
        
        
        <div className="relative">
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          
          <label
            htmlFor="image-upload"
            className="w-24 h-24 ml-5 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors overflow-hidden bg-gray-50"
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            )}
          </label>
          <span className='text-gray-800'>Upload your photo </span>
        </div>

        {imagePreview && (
          <button
            onClick={removeImage}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {image && (
        <div className="mt-4 text-sm text-gray-600">
        </div>
      )}
    </div>
  );
}
