import React from 'react';

import './item-status-filter.scss';

const ItemStatusFilter = () => {
  return (
    <div className="btn-group">
      <button type="button"
              className="btn btn-outline-primary">Все</button>
      <button type="button"
              className="btn btn-outline-primary">В процессе</button>
      <button type="button"
              className="btn btn-outline-primary">Завершены</button>
    </div>
  );
};

export default ItemStatusFilter;
