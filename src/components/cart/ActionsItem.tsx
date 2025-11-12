const DeleteItemIcon = () => {
  return (
    <svg version="1.1" viewBox="0 0 24 24">
      <g id="delete" fill="#ffffff">
        <path d="M18.9,8H5.1c-0.6,0-1.1,0.5-1,1.1l1.6,13.1c0.1,1,1,1.7,2,1.7h8.5c1,0,1.9-0.7,2-1.7l1.6-13.1C19.9,8.5,19.5,8,18.9,8z" />
        <path d="M20,2h-5l0,0c0-1.1-0.9-2-2-2h-2C9.9,0,9,0.9,9,2l0,0H4C2.9,2,2,2.9,2,4v1c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1V4    C22,2.9,21.1,2,20,2z" />
      </g>
    </svg>
  );
};

const DecreaseItemIcon = () => {
  return (
    <svg
      baseProfile="tiny"
      height="24px"
      id="Layer_1"
      version="1.2"
      viewBox="0 0 24 24"
      width="24px"
    >
      <path
        d="M18,11H6c-1.104,0-2,0.896-2,2s0.896,2,2,2h12c1.104,0,2-0.896,2-2S19.104,11,18,11z"
        fill="#ffffff
      "
      />
    </svg>
  );
};

const IncreaseItemIcon = () => {
  return (
    <svg version="1.1" viewBox="0 0 24 24">
      <path
        d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z"
        id="exit"
        fill="#ffffff"
        transform="rotate(-45 12 12)"
      />
    </svg>
  );
};

const CloseCartIcon = () => {
  return (
    <svg version="1.1" viewBox="0 0 24 24">
      <path
        d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z"
        id="exit"
        fill="#ffffff"
      />
    </svg>
  );
};

export { DeleteItemIcon, IncreaseItemIcon, DecreaseItemIcon, CloseCartIcon };
