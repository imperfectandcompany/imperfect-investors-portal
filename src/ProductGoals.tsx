import { FunctionComponent, h } from 'preact';

const ProductGoals: FunctionComponent = () => {
  return <div className="py-8">
        <h1 className="text-4xl font-bold mb-6">Product Goals</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-2 border-yellow-500/15 p-6 !bg-white">
                <h2 className="text-2xl font-semibold mb-4">Safe Space for Genuine Posting</h2>
                <p>Provide a judgment-free environment where users feel empowered to express themselves without fear of alienating contacts or damaging their 'personal brand'.</p>
            </div>
            <div className="border-2 border-yellow-500/15 p-6 !bg-white">
                <h2 className="text-2xl font-semibold mb-4">Restore Authentic Social Interaction</h2>
                <p>Bring back the fun and collaborative nature of social media by removing the superficial aspects that contribute to toxicity and unhealthy habits.</p>
            </div>
            <div className="border-2 border-yellow-500/15 p-6 !bg-white">
                <h2 className="text-2xl font-semibold mb-4">Transparent Data Practices</h2>
                <p>Notify users when their data is being collected on the public feed, promoting transparency and empowering them to make informed choices.</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="border-2 border-yellow-500/15 p-6 !bg-white">
                <h2 className="text-2xl font-semibold mb-4">Thoughtful Posting Process</h2>
                <p>Implement a two-step posting process to encourage users to carefully consider what and where they share, fostering more mindful and genuine interactions.</p>
            </div>
            <div className="border-2 border-yellow-500/15 p-6 !bg-white">
                <h2 className="text-2xl font-semibold mb-4">User-Centric Control</h2>
                <p>We aim to put users back in the driver seat of their online interactions. With Postogon, users will have the power to control and tweak the algorithms that play a formidable role in their digital experiences. Instead of being fed what an invisible algorithm dictates, our users will have the option to shape their own feeds and interactions, owning their unique algorithm.</p>
            </div>
        </div>
    </div>;
};

export default ProductGoals;
