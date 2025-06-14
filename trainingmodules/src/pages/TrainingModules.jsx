import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TrainingModules = () => {
  const { modules } = useSelector(state => state.app);

  return (
    <div className='p-5'>
      <Link
        to="/add-training-module"
        className='bg-purple-800 text-white rounded-lg px-6 py-2 hover:bg-purple-900 inline-block mb-4'
      >
        New Training Module
      </Link>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {modules && modules.length > 0 ? (
          modules.map((mod, index) => (
            <div key={index} className='border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition'>
                <h3 className='text-lg font-semibold mb-3 text-gray-800 text-center'>{mod.moduleName}</h3>
              <img
                src={mod.coverImage}
                alt={mod.moduleName}
                className='w-full h-40 object-cover rounded-md mb-3'
              />
         <div className='flex items-center justify-center'>
             <Link to={`/training-module/${mod.moduleId}`} className='border border-gray-300 rounded-lg px-4 py-2'>View</Link>
         </div>
            </div>
          ))
        ) : (
          <p className='col-span-3 text-center text-gray-600'>No training modules found.</p>
        )}
      </div>
    </div>
  );
};

export default TrainingModules;
