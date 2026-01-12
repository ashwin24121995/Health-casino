import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Sparkles, Users, Gift, Trophy } from "lucide-react";

export default function Home() {
  const games = [
    {
      id: "mines",
      name: "Mines",
      description: "Click tiles to find safe spots and avoid mines. Increase your multiplier with each safe reveal!",
      maxMultiplier: "Up to 3x",
      icon: "/images/mines-icon.png",
      href: "/game/mines",
    },
    {
      id: "slots",
      name: "Slots",
      description: "Match 3 symbols on the reels to win! The Crown is worth 20x your bet!",
      maxMultiplier: "Up to 20x",
      icon: "/images/slots-icon.png",
      href: "/game/slots",
    },
    {
      id: "plinko",
      name: "Plinko",
      description: "Drop the ball and watch it fall through pegs. Land in the center for the biggest multiplier!",
      maxMultiplier: "Up to 10x",
      icon: "/images/plinko-icon.png",
      href: "/game/plinko",
    },
    {
      id: "diamonds",
      name: "Diamonds",
      description: "Match 3 or more gems of the same type to score big! The more you match, the bigger your reward!",
      maxMultiplier: "Up to 5x per match",
      icon: "/images/diamonds-icon.png",
      href: "/game/diamonds",
    },
    {
      id: "roulette",
      name: "Roulette",
      description: "Spin the wheel and bet on numbers, colors, or ranges. Multiple betting options for every strategy!",
      maxMultiplier: "Up to 36x",
      icon: "/images/roulette-icon.png",
      href: "/game/roulette",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-primary via-purple-900 to-secondary flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/images/hero-casino-night.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-accent">Lucky Lotus</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Join millions of players in the ultimate social casino experience. Play free, win big, and celebrate with our vibrant community!
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/games">
                <a className="no-underline">
                  <Button className="bg-accent text-primary hover:bg-accent/90 font-bold px-8 py-3 text-lg">
                    PLAY NOW
                  </Button>
                </a>
              </Link>
              <Link href="/about">
                <a className="no-underline">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 font-bold px-8 py-3 text-lg"
                  >
                    Learn More
                  </Button>
                </a>
              </Link>
            </div>
          </div>

          {/* Right - Character Image */}
          <div className="flex justify-center">
            <img
              src="/images/lucky-mascot-character.png"
              alt="Lucky Lotus Mascot"
              className="max-w-md w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Top Awesome Games Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              <span className="text-accent">Top Awesome</span>
              <br />
              <span className="text-foreground">Games</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the thrill of premium casino games. Free-to-play entertainment with stunning graphics and exciting features.
            </p>
          </div>

          {/* Games Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {games.map((game) => (
              <div
                key={game.id}
                className="bg-card border-2 border-secondary/30 rounded-2xl p-8 hover:border-accent/50 transition-all hover:shadow-xl group"
              >
                {/* Game Icon */}
                <div className="mb-6 flex justify-center">
                  <img
                    src={game.icon}
                    alt={game.name}
                    className="w-24 h-24 object-contain group-hover:scale-110 transition-transform"
                  />
                </div>

                {/* Game Name */}
                <h3 className="text-2xl font-bold text-card-foreground mb-3 text-center">
                  {game.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-center mb-6 text-sm">
                  {game.description}
                </p>

                {/* Max Multiplier */}
                <div className="bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/50 rounded-lg p-4 mb-6 text-center">
                  <p className="text-accent font-bold text-lg">
                    {game.maxMultiplier}
                  </p>
                </div>

                {/* Play Button */}
                <Link href={game.href}>
                  <a className="no-underline block">
                    <Button className="w-full bg-gradient-to-r from-accent to-secondary text-white hover:opacity-90 font-bold py-3 text-base">
                      ▶ Play Now
                    </Button>
                  </a>
                </Link>
              </div>
            ))}
          </div>

          {/* View All Games Button */}
          <div className="text-center">
            <Link href="/games">
              <a className="no-underline">
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10 font-bold px-8 py-3 text-lg"
                >
                  View All Games
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Why Choose Lucky Lotus?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-secondary to-accent rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Gift className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                Daily Rewards
              </h3>
              <p className="text-muted-foreground">
                Collect daily bonuses, free spins, and exclusive rewards every time you play.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-accent to-secondary rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                Vibrant Community
              </h3>
              <p className="text-muted-foreground">
                Connect with millions of players, join clans, and compete in tournaments worldwide.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                Premium Games
              </h3>
              <p className="text-muted-foreground">
                Enjoy 170+ unique slot machines with stunning graphics and exciting features.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-secondary to-primary rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Trophy className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                Win Big
              </h3>
              <p className="text-muted-foreground">
                Unlock massive jackpots, special bonuses, and legendary rewards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Celebration Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-purple-900 to-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="/images/coins-celebration.jpg"
                alt="Celebration with coins"
                className="rounded-xl shadow-2xl max-w-full h-auto"
              />
            </div>

            {/* Content */}
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                Join Our Winning Community
              </h2>
              <p className="text-lg mb-8 text-gray-200">
                Experience the thrill of social casino gaming with our active community of players from around the world. Share your wins, celebrate together, and unlock exclusive rewards!
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-accent text-2xl">✓</span>
                  <span>700K+ active community members</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent text-2xl">✓</span>
                  <span>Daily tournaments with amazing prizes</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent text-2xl">✓</span>
                  <span>Safe, secure, and fair gameplay</span>
                </li>
              </ul>
              <Link href="/games">
                <a className="no-underline">
                  <Button className="bg-accent text-primary hover:bg-accent/90 font-bold px-8 py-3 text-lg">
                    Start Playing
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-foreground">
            Ready to Strike Gold?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Start playing now and experience the ultimate social casino adventure. Free to play, always!
          </p>
          <Link href="/games">
            <a className="no-underline">
              <Button className="bg-gradient-to-r from-secondary to-accent text-white hover:opacity-90 font-bold px-12 py-4 text-xl">
                PLAY NOW - FREE!
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
