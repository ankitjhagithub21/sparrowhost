// 'use client';
// import { useEffect, useState } from 'react';

// export default function ScormViewer() {
//   const [apiReady, setApiReady] = useState(false);

//   useEffect(() => {
//     // ✅ Expose SCORM API before iframe loads
//     if (!window.API_1484_11) {
//       window.API_1484_11 = {
//         Initialize: () => 'true',
//         Terminate: () => 'true',
//         SetValue: (key, value) => {
//           console.log(`SCORM SetValue: ${key} = ${value}`);
//           if (key === 'cmi.score.raw') {
//             localStorage.setItem('scormScore', value);
//             window.dispatchEvent(new CustomEvent('scormScoreUpdate', { detail: value }));
//           }
//           return 'true';
//         },
//         GetValue: (key) => {
//           if (key === 'cmi.score.raw') {
//             return localStorage.getItem('scormScore') || '0';
//           }
//           return '';
//         },
//         Commit: () => 'true',
//         GetLastError: () => '0',
//         GetErrorString: () => '',
//         GetDiagnostic: () => '',
//       };
//     }

//     setApiReady(true);
//   }, []);

//   if (!apiReady) return <p>Loading SCORM API...</p>;

//   return (
//     <div className="h-screen">
//       <iframe
//         src={`/scorm/index.html`} // adjust path as needed
//         width="100%"
//         height="100%"
//         title="SCORM Course"
//       />
//     </div>
//   );
// }


'use client';
import { useEffect, useState } from 'react';

export default function ScormViewer() {
  const [apiReady, setApiReady] = useState(false);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    // Simulate a logged-in user and course
    const userId = 'user123';
    const moduleId = 'html-course';

    const progressKey = `scormProgress_${userId}_${moduleId}`;

    // Expose SCORM API
    window.API_1484_11 = {
      Initialize: () => 'true',
      Terminate: () => 'true',
      SetValue: (key, value) => {
        const saved = JSON.parse(localStorage.getItem(progressKey) || '{}');
        saved[key] = value;
        localStorage.setItem(progressKey, JSON.stringify(saved));
        window.dispatchEvent(new CustomEvent('scormProgressUpdate', { detail: saved }));
        return 'true';
      },
      GetValue: (key) => {
        const saved = JSON.parse(localStorage.getItem(progressKey) || '{}');
        return saved[key] || '';
      },
      Commit: () => 'true',
      GetLastError: () => '0',
      GetErrorString: () => '',
      GetDiagnostic: () => '',
    };

    // Listen for updates
    const update = (e) => setProgress(e.detail);
    window.addEventListener('scormProgressUpdate', update);

    // Load existing progress
    const existing = localStorage.getItem(progressKey);
    if (existing) {
      setProgress(JSON.parse(existing));
    }

    setApiReady(true);
    return () => window.removeEventListener('scormProgressUpdate', update);
  }, []);

  if (!apiReady) return <p>Loading SCORM API...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">SCORM Course Viewer</h1>
      <iframe
        src="/scorm/html-course/index.html"
        title="SCORM Course"
        width="100%"
        height="400px"
        className="border rounded"
      />
      <div className="mt-4 p-3 bg-gray-100 rounded">
        <h2 className="text-lg font-semibold">📊 Learner Progress</h2>
        <pre className="text-sm mt-2 bg-white p-2 rounded border">
          {JSON.stringify(progress, null, 2)}
        </pre>
      </div>
    </div>
  );
}
