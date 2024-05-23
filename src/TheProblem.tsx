export const TheProblem = () => (
    <div className='py-8'>
        <header class="text-4xl font-bold mb-6" aria-label="Main title: The Problem">The Problem</header>
        <section class="grid" aria-label="Main issues discussed">
            <div>
                <article class="card" aria-label="Issue: Difficulty expressing authenticity online">
                    <div class="icon-bg mr-6" aria-hidden="true">
                        <i class="fas fa-mask fa-2x text-green-400" aria-hidden="true"></i>
                    </div>
                    <div>
                        <h2 class="font-semibold text-green-400">Difficulty expressing authenticity online</h2>
                        <p>Younger folks experience fear of cancel culture and invasive cybervetting practices that discourage them from posting their true thoughts and feelings.</p>
                    </div>
                </article>
                <article class="card" aria-label="Issue: Unethical social media design choices">
                    <div class="icon-bg mr-6" aria-hidden="true">
                        <i class="fas fa-cogs fa-2x text-blue-400" aria-hidden="true"></i>
                    </div>
                    <div>
                        <h2 class="font-semibold text-blue-400">Unethical social media design choices</h2>
                        <p>Social media platforms employ dopamine-inducing tactics that promote addiction and the prominence of influencers who lack authenticity.</p>
                    </div>
                </article>
            </div>
            <div>
                <article class="card" aria-label="Issue: Deceitful information from unqualified influencers">
                    <div class="icon-bg mr-6" aria-hidden="true">
                        <i class="fas fa-user-times fa-2x text-red-400" aria-hidden="true"></i>
                    </div>
                    <div>
                        <h2 class="font-semibold text-red-400">Deceitful information from unqualified influencers</h2>
                        <p>Younger users often view influencers as credible sources, exposing them to misleading and inaccurate information.</p>
                    </div>
                </article>
                <article class="card" aria-label="Issue: Loss of right to anonymity and curated feeds">
                    <div class="icon-bg mr-6" aria-hidden="true">
                        <i class="fas fa-eye-slash fa-2x text-yellow-400" aria-hidden="true"></i>
                    </div>
                    <div>
                        <h2 class="font-semibold text-yellow-400">Loss of right to anonymity and curated feeds</h2>
                        <p>Younger individuals have lost the ability to be anonymous online, and their social media feeds are curated based on assumptions rather than their actual interests.</p>
                    </div>
                </article>
            </div>
        </section>
    </div>
);