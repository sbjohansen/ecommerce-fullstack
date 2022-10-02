import { useState } from 'react';

import { Close } from '@material-ui/icons';
const Announce = () => {
  const [announceStyle, setAnnounceStyle] = useState(
    'bg-[#151515] font-bold text-white flex items-center justify-center',
  );

  const handleClose = () => {
    setAnnounceStyle(announceStyle + ' hidden');
  };

  return (
    <div className={announceStyle}>
      <h2>Hurry up. New collection available!</h2>
      <Close className="cursor-pointer" onClick={handleClose} />
    </div>
  );
};

export default Announce;
