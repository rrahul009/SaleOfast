import React from 'react';

const WeOffer = () => {
    return (
        <div className="p-4 bg-gray-100">
            <div className="bg-white p-5 container mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">What We’re Offering</h1>
                <p className="text-xl text-gray-700 mb-4 text-center">
                    Dealing in all Sales solutions
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            src="https://www.shutterstock.com/image-photo/analyst-uses-computer-dashboard-data-600nw-2285412737.jpg" // Replace with your image path
                            alt="Feature 1"
                            className="w-full h-48 object-cover" // Consistent height for all images
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">CRM</h3>
                            <p className="text-gray-600 text-sm">
                                CRM is a system used by businesses to manage interactions and relationships with current and potential customers. CRM is designed to streamline sales, customer service, and support functions with the overarching goal of enhancing customer satisfaction, loyalty, and retention.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            src="https://b2field.com/wp-content/uploads/2021/12/featured-image-x2-1500_726.png" // Replace with your image path
                            alt="Feature 2"
                            className="w-full h-48 object-cover" // Consistent height for all images
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Field Sales App</h3>
                            <p className="text-gray-600 text-sm">
                                App is designed to assist sales representatives in performing their duties while they are out in the field. This app is specifically tailored to meet the needs of sales professionals who spend a significant amount of time meeting clients, prospecting, and closing deals outside of the office.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img
                            src="https://www.gratifi.com/wp-content/uploads/2020/02/channelPartnerBlog1_banner.jpg" // Replace with your image path
                            alt="Feature 3"
                            className="w-full h-48 object-cover" // Consistent height for all images
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Channel Partner App</h3>
                            <p className="text-gray-600 text-sm">
                                An application designed to facilitate communication, collaboration, and transactions between a company and its channel partners. Our app helps companies to provide their channel partners with easy access to essential resources, tools, and information needed to sell products or services effectively.
                            </p>
                        </div>
                    </div>


                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-5 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
                        <img
                            src="https://www.marketing91.com/wp-content/uploads/2022/07/Distribution-Management.jpg" // Replace with your image path
                            alt="Feature 4"
                            className="w-full h-60 object-cover" // Ensures image covers container while maintaining aspect ratio
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Retailer App</h3>
                            <p className="text-sm text-gray-600">
                                An application designed to facilitate communication, collaboration, and transactions between a company and its channel partners. Our app helps companies to provide their channel partners with easy access to essential resources, tools, and information needed to sell products or services effectively.
                            </p>
                        </div>
                    </div>
                  
                    {/* Card 2 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
                        <img
                            src="https://img.freepik.com/premium-photo/document-management-system-dms-concept-businessman-using-laptop-smartphone-office-choosing-analyze-digitally-enhanced-images_1027380-6871.jpg" // Replace with your image path
                            alt="Feature 5"
                            className="w-full h-60 object-cover" // Ensures image covers container while maintaining aspect ratio
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">DMS</h3>
                            <p className="text-sm text-gray-600">
                                DMS is a comprehensive software solution designed to streamline and optimize the management of a company's distribution network. This system helps businesses efficiently handle their distributors, dealers, and partners, ensuring smooth operations and enhanced collaboration to grow the business.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeOffer;
