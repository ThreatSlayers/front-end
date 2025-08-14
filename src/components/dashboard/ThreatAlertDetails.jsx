import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Badge } from '../common/Badge';

const ThreatAlertDetails = ({ isOpen, onClose, alert }) => {
  if (!alert) return null;

  const severityType = alert.severity === 'CRITICAL' ? 'critical' : 'warning';

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70" />
        </Transition.Child>

        {/* Dialog Panel */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl bg-card-dark rounded-lg">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700">
                  <div className="flex items-center space-x-2">
                    <span className="text-red-500">⚠️</span>
                    <Dialog.Title className="text-xl font-semibold flex items-center">
                      Threat Alert Details
                      <Badge type={severityType} className="ml-3">
                        {alert.severity}
                      </Badge>
                    </Dialog.Title>
                  </div>
                  <button onClick={onClose} className="text-gray-400 hover:text-white">
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">{alert.title}</h3>
                    <p className="text-gray-400 mt-1">{alert.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-base-dark p-4 rounded-lg">
                      <h4 className="text-sm text-gray-400">Detected</h4>
                      <p className="mt-1 font-medium">{alert.time}</p>
                    </div>
                    <div className="bg-base-dark p-4 rounded-lg">
                      <h4 className="text-sm text-gray-400">Monitor</h4>
                      <p className="mt-1 font-medium">{alert.source}</p>
                    </div>
                  </div>

                  {alert.affectedSystems && (
                    <div className="bg-base-dark p-4 rounded-lg">
                      <h4 className="text-sm text-gray-400">Affected Systems</h4>
                      <p className="mt-1 font-medium">{alert.affectedSystems}</p>
                    </div>
                  )}

                  {alert.recommendedAction && (
                    <div className="bg-base-dark p-4 rounded-lg">
                      <h4 className="text-sm text-gray-400">Recommended Action</h4>
                      <p className="mt-1 text-red-400 font-medium">{alert.riskLevel}</p>
                      <p className="mt-1">{alert.recommendedAction}</p>
                    </div>
                  )}

                  {/* Footer Buttons */}
                  <div className="flex justify-end space-x-4 mt-6">
                    <button
                      onClick={onClose}
                      className="px-4 py-2 border border-gray-600 rounded-md hover:bg-gray-800"
                    >
                      Mark as Resolved
                    </button>
                    <button className="px-4 py-2 bg-accent-blue rounded-md">
                      Investigate Further
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ThreatAlertDetails;
