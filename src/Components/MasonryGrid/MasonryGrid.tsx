import React, { Children } from "react";
import Masonry from "react-masonry-css";
interface Props {
  children: React.ReactNode;
}

/**This component is meant to wrap around multiple card components.
 * It controls the amount and size of the columns in the grid. */

const breakpointColumnsObj = {
  2000: 4,
  1800: 3,
  900: 3,
  800: 2,
  500: 1,
};

export const MasonryGrid: React.FC<Props> = ({ ...props }) => {
  const childElements = Children.map(props.children, (child) => {
    return <div className=""> {child} </div>;
  });

  return (
    <div>
      <Masonry
        className="my-masonry-grid"
        breakpointCols={breakpointColumnsObj}
        columnClassName="my-masonry-grid_column"
      >
        {childElements}
      </Masonry>
    </div>
  );
};
