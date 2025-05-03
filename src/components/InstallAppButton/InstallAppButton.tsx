// components/InstallAppButton.tsx
'use client';

import React from 'react';
import { usePWAInstallPrompt } from '../../hooks/usePWAInstallPrompt';

const InstallAppButton: React.FC = () => {
  const { isInstallable, promptInstall } = usePWAInstallPrompt();

  return isInstallable ? (
    <button
      onClick={promptInstall}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition float-right m-2"
    >
      Install App
    </button>
  ) : null;
};

export default InstallAppButton;
