import React from "react";
import ReactLoading from "react-loading";

interface LoadingType {
  type: any;
  color: string;
  height: string;
  width: string;
}

const Loading = ({ type, color, height, width }: LoadingType) => (
  <ReactLoading type={type} color={color} height={height} width={width} />
);

export default Loading;
