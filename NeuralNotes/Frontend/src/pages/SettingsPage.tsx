import React from 'react';
import ThemeToggle from '../components/ThemeToggle';
import { useTranslation } from 'react-i18next';
import { useLayoutMode } from '../contexts/LayoutModeContext';
import LayoutModeSwitcher from '../components/LayoutModeSwitcher';

const SettingsPage: React.FC = () => {
  const { t } = useTranslation();
  const { layoutMode, setLayoutMode } = useLayoutMode();

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-6">
        {t('settings.title', 'Settings')}
      </h1>
      
      <div className="space-y-6">
        <div className="bg-white dark:bg-neutral-800/50 shadow sm:rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                {t('settings.appearance.title', 'Appearance')}
              </h2>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {t('settings.appearance.description', 'Choose your preferred light or dark theme.')}
              </p>
            </div>
            <ThemeToggle />
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-800/50 shadow sm:rounded-lg p-6">
          <div> 
            <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-1">
              {t('settings.notesView.title', 'Notes View Layout')}
            </h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              {t('settings.notesView.description', 'Select how notes are displayed in the main view.')}
            </p>
            <LayoutModeSwitcher currentLayout={layoutMode} onSetLayout={setLayoutMode} />
          </div>
        </div>
        
        {/* Gelecekte buraya başka ayar seçenekleri eklenebilir */}
        {/* Örnek:
        <div className="mt-6 border-t border-neutral-200 dark:border-neutral-700 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                {t('settings.language.title', 'Language')}
              </h2>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {t('settings.language.description', 'Select your preferred language.')}
              </p>
            </div>
            // Dil seçme bileşeni buraya gelebilir
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default SettingsPage; 