import { useState } from 'react'

const data = [
  {
    id: 1,
    type: 'image',
    title: 'AI Image',
    description: 'Generated using Stable Diffusion',
    url:
      'https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540915_640.jpg'
  },
  {
    id: 2,
    type: 'image',
    title: 'Futuristic Robot',
    description: 'Midjourney AI Artwork',
    url:
      'https://tse4.mm.bing.net/th/id/OIP.mRPf_VC5H4dYwvCPZypIgAHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=201&h=201&c=7&o=7&rm=3'
  },
  {
    id: 3,
    type: 'image',
    title: 'Futuristic Robot',
    description: 'Midjourney AI Artwork',
    url:
      'https://tse2.mm.bing.net/th/id/OIP.gEh_gF7gd6eCtZBpX5CICgHaEJ?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 4,
    type: 'image',
    title: 'AI Art',
    description: 'Midjourney AI Artwork',
    url:
      'https://news.ubc.ca/wp-content/uploads/2023/08/AdobeStock_559145847.jpeg'
  },
  {
    id: 5,
    type: 'image',
    title: 'AI Image',
    description: 'Generated using Stable Diffusion',
    url:
      'https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540915_640.jpg'
  },
  {
    id: 6,
    type: 'image',
    title: 'Futuristic Robot',
    description: 'Midjourney AI Artwork',
    url:
      'https://tse4.mm.bing.net/th/id/OIP.mRPf_VC5H4dYwvCPZypIgAHaHa?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=201&h=201&c=7&o=7&rm=3'
  },
  {
    id: 7,
    type: 'image',
    title: 'Futuristic Robot',
    description: 'Midjourney AI Artwork',
    url:
      'https://tse2.mm.bing.net/th/id/OIP.gEh_gF7gd6eCtZBpX5CICgHaEJ?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 8,
    type: 'image',
    title: 'AI Art',
    description: 'Midjourney AI Artwork',
    url:
      'https://news.ubc.ca/wp-content/uploads/2023/08/AdobeStock_559145847.jpeg'
  }
]

export default function AIGallery () {
  const [search, setSearch] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)

  const filtered = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  const openModal = item => {
    setSelectedItem(item)
    document.getElementById('ai_modal').showModal()
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 p-6'>
      {/* Header */}
      <div className='max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
        <div>
          <h1 className='text-4xl font-extrabold text-white tracking-wide'>
            AI Creative Gallery
          </h1>
          <p className='text-gray-400 mt-2'>
            Explore premium AI-generated artworks
          </p>
        </div>

        <input
          type='text'
          placeholder='Search AI artworks...'
          value={search}
          onChange={e => setSearch(e.target.value)}
          className='px-5 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none w-full md:w-80'
        />
      </div>

      {/* Gallery Grid */}
      <div className='max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {filtered.map(item => (
          <div
            key={item.id}
            className='group bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition duration-300'
          >
            <div className='relative overflow-hidden'>
              <img
                src={item.url}
                alt={item.title}
                className='w-full h-56 object-cover group-hover:scale-110 transition duration-500'
              />

              {/* Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end'>
                <button
                  className='m-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold'
                  onClick={() => openModal(item)}
                >
                  View Full
                </button>
              </div>
            </div>

            {/* ✅ FULL DETAILS MODAL */}
            <dialog id='ai_modal' className='modal'>
              <div className='modal-box max-w-4xl bg-gray-900 text-white'>
                {selectedItem && (
                  <>
                    {/* IMAGE */}
                    <img
                      src={selectedItem.url}
                      alt={selectedItem.title}
                      className='w-full max-h-[400px] object-cover rounded-xl mb-6'
                    />

                    {/* TITLE */}
                    <h3 className='text-2xl font-bold mb-2'>
                      {selectedItem.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className='text-gray-400 mb-4'>
                      {selectedItem.description}
                    </p>

                    {/* META INFO */}
                    <div className='flex flex-wrap gap-4 text-sm mb-6'>
                      <span className='px-4 py-1 rounded-full bg-blue-600/30 text-blue-300'>
                        Type: {selectedItem.type}
                      </span>

                      <span className='px-4 py-1 rounded-full bg-emerald-600/30 text-emerald-300'>
                        Status: AI Generated
                      </span>
                    </div>

                    {/* ACTIONS */}
                    <div className='flex justify-end gap-4'>
                      <form method='dialog'>
                        <button className='btn bg-gray-700 hover:bg-gray-600 text-white'>
                          Close
                        </button>
                      </form>

                     
                    </div>
                  </>
                )}
              </div>
            </dialog>

            <div className='p-5'>
              <h3 className='font-bold text-lg text-white tracking-wide'>
                {item.title}
              </h3>

              <p className='text-sm text-gray-400 mt-1'>{item.description}</p>

              <div className='mt-4 flex justify-between items-center'>
                <span className='text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400'>
                  AI Generated
                </span>

               
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <p className='text-center text-gray-400 mt-24 text-lg'>
          No AI artworks found.
        </p>
      )}
    </div>
  )
}
