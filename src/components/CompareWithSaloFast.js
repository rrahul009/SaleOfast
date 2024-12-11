import Link from 'next/link';
import React from 'react';

const CompareWithSaleOFast = () => {
  const comparisonData = [
    { feature: 'Pricing', SaleOFast: 'Affordable', competitor: 'Expensive' },
    { feature: 'Delivery Speed', SaleOFast: 'Fast (24-48 hours)', competitor: 'Slow (3-5 days)' },
    { feature: 'Customer Support', SaleOFast: '24/7 Live Chat', competitor: 'Limited Hours' },
    { feature: 'User Experience', SaleOFast: 'Seamless and Intuitive', competitor: 'Complex and Outdated' },
    { feature: 'Scalability', SaleOFast: 'Highly Scalable', competitor: 'Limited Scalability' },
  ];

  return (
    <div className="compare-page  py-16 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Why Choose SaleOFast Over the Competition?
        </h1>
        <p className="text-lg text-gray-600 text-center mb-6">
          Discover how SaleOFast outperforms the competition in key areas that matter to you.
        </p>
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white text-left">
                <th className="p-4 text-lg">Feature</th>
                <th className="p-4 text-lg">SaleOFast</th>
                <th className="p-4 text-lg">Competitors</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className={`text-gray-800 ${
                    index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                  }`}
                >
                  <td className="p-4 font-semibold">{row.feature}</td>
                  <td className="p-4">{row.SaleOFast}</td>
                  <td className="p-4">{row.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-10">
       <Link href="/contactus">   <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all">
            Learn More About SaleOFast
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default CompareWithSaleOFast;
