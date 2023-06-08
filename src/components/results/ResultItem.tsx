import React from 'react';

interface ResultItemProps {
  symbol: string;
  label: string;
  value: number | any;
}

const ResultItem = ({ label, symbol, value }: ResultItemProps) => {
  return (
    <div className="flex bg-gray-100 mt-2 flex-col items-center py-4 px-1 border">
      <div className="flex items-center ">
        <p className="text-xl font-bold">{`${symbol}:`}</p>
        <p className="ml-2">{value}</p>
      </div>
      <p className="text-center text-xs">{label}</p>
    </div>
  );
};

export default ResultItem;
