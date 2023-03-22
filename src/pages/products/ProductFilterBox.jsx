const ProductFilterBox = ({ filterItem, setFilterItem, setCurrentPage }) => {

  // On Change Handler
  const onChangeHandler = (e) => {
    setFilterItem(e.target.id);
    setCurrentPage(1);
  };
  return (
    <div className="product-filter">
      <div className="form-group">
        <input
          onChange={onChangeHandler}
          value={filterItem}
          type="radio"
          name="filter"
          id="all"
        />
        <label htmlFor="all">With Filter</label>
      </div>
      <div className="form-group">
        <input
          onChange={onChangeHandler}
          value={filterItem}
          type="radio"
          name="filter"
          id="laptop"
        />
        <label htmlFor="laptop">Laptop</label>
      </div>
      <div className="form-group">
        <input
          onChange={onChangeHandler}
          value={filterItem}
          type="radio"
          name="filter"
          id="mobile"
        />
        <label htmlFor="mobile">Phone</label>
      </div>
    </div>
  );
};

export default ProductFilterBox;
