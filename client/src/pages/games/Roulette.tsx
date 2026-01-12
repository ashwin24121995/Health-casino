import { useState, useReducer } from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw, Info } from "lucide-react";

const INITIAL_CREDITS = 1000000;
const BET_AMOUNT = 10000;

interface GameState {
  credits: number;
  spinning: boolean;
  selectedBet: string | null;
  betAmount: number;
  winningNumber: number | null;
  lastWinnings: number;
  message: string;
  wheelRotation: number;
}

type GameAction =
  | { type: "SELECT_BET"; bet: string }
  | { type: "SPIN" }
  | { type: "SPIN_COMPLETE"; number: number; winnings: number }
  | { type: "RESET" };

const initialState: GameState = {
  credits: INITIAL_CREDITS,
  spinning: false,
  selectedBet: null,
  betAmount: BET_AMOUNT,
  winningNumber: null,
  lastWinnings: 0,
  message: "Select a bet and SPIN to play!",
  wheelRotation: 0,
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "SELECT_BET":
      return {
        ...state,
        selectedBet: action.bet,
        message: `Bet selected: ${action.bet}. Click SPIN to play!`,
      };

    case "SPIN":
      if (state.credits < BET_AMOUNT || !state.selectedBet) {
        return {
          ...state,
          message: state.credits < BET_AMOUNT ? "Not enough credits!" : "Select a bet first!",
        };
      }

      return {
        ...state,
        spinning: true,
        credits: state.credits - BET_AMOUNT,
        message: "Spinning...",
        wheelRotation: state.wheelRotation + 3600 + Math.random() * 360,
      };

    case "SPIN_COMPLETE":
      return {
        ...state,
        spinning: false,
        winningNumber: action.number,
        credits: state.credits + action.winnings,
        lastWinnings: action.winnings,
        message:
          action.winnings > 0
            ? `🎉 YOU WON! ${action.winnings.toLocaleString()} credits!`
            : "No match. Try again!",
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export default function Roulette() {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const handleSpin = () => {
    if (state.spinning || !state.selectedBet) return;

    dispatch({ type: "SPIN" });

    setTimeout(() => {
      const winningNumber = Math.floor(Math.random() * 37); // 0-36
      let winnings = 0;

      // Calculate winnings based on bet type
      if (state.selectedBet === "number") {
        // Single number bet - 36:1 payout
        if (Math.random() < 1 / 37) {
          winnings = BET_AMOUNT * 36;
        }
      } else if (state.selectedBet === "red") {
        // Red bet - 1:1 payout (18 red numbers)
        const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
        if (redNumbers.includes(winningNumber)) {
          winnings = BET_AMOUNT * 2;
        }
      } else if (state.selectedBet === "black") {
        // Black bet - 1:1 payout (18 black numbers)
        const blackNumbers = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
        if (blackNumbers.includes(winningNumber)) {
          winnings = BET_AMOUNT * 2;
        }
      } else if (state.selectedBet === "odd") {
        // Odd bet - 1:1 payout
        if (winningNumber > 0 && winningNumber % 2 === 1) {
          winnings = BET_AMOUNT * 2;
        }
      } else if (state.selectedBet === "even") {
        // Even bet - 1:1 payout
        if (winningNumber > 0 && winningNumber % 2 === 0) {
          winnings = BET_AMOUNT * 2;
        }
      } else if (state.selectedBet === "low") {
        // Low (1-18) - 1:1 payout
        if (winningNumber >= 1 && winningNumber <= 18) {
          winnings = BET_AMOUNT * 2;
        }
      } else if (state.selectedBet === "high") {
        // High (19-36) - 1:1 payout
        if (winningNumber >= 19 && winningNumber <= 36) {
          winnings = BET_AMOUNT * 2;
        }
      } else if (state.selectedBet === "dozen1") {
        // First dozen (1-12) - 2:1 payout
        if (winningNumber >= 1 && winningNumber <= 12) {
          winnings = BET_AMOUNT * 3;
        }
      } else if (state.selectedBet === "dozen2") {
        // Second dozen (13-24) - 2:1 payout
        if (winningNumber >= 13 && winningNumber <= 24) {
          winnings = BET_AMOUNT * 3;
        }
      } else if (state.selectedBet === "dozen3") {
        // Third dozen (25-36) - 2:1 payout
        if (winningNumber >= 25 && winningNumber <= 36) {
          winnings = BET_AMOUNT * 3;
        }
      }

      dispatch({ type: "SPIN_COMPLETE", number: winningNumber, winnings });
    }, 3000);
  };

  const getBetPayouts = () => {
    const bets: { [key: string]: { label: string; payout: string } } = {
      number: { label: "Single Number", payout: "36:1" },
      red: { label: "Red", payout: "1:1" },
      black: { label: "Black", payout: "1:1" },
      odd: { label: "Odd", payout: "1:1" },
      even: { label: "Even", payout: "1:1" },
      low: { label: "Low (1-18)", payout: "1:1" },
      high: { label: "High (19-36)", payout: "1:1" },
      dozen1: { label: "1st Dozen (1-12)", payout: "2:1" },
      dozen2: { label: "2nd Dozen (13-24)", payout: "2:1" },
      dozen3: { label: "3rd Dozen (25-36)", payout: "2:1" },
    };
    return bets;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-purple-900 to-secondary pb-20">
      {/* Header */}
      <div className="bg-black/40 backdrop-blur p-6 sticky top-0 z-40 border-b border-cyan-400/30">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-white">🎡 ROULETTE</h1>
            <p className="text-cyan-400 text-sm">Spin the wheel and win big!</p>
          </div>
          <div className="text-right">
            <div className="text-cyan-400 text-sm">Your Credits</div>
            <div className="text-3xl font-bold text-white">{state.credits.toLocaleString()}</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Game Area */}
          <div className="md:col-span-2">
            <div className="bg-gradient-to-br from-black/60 to-purple-900/60 backdrop-blur rounded-3xl p-8 shadow-2xl border border-cyan-400/20">
              {/* Roulette Wheel */}
              <div className="flex justify-center mb-8">
                <div className="relative w-64 h-64">
                  <div
                    className="absolute inset-0 rounded-full border-8 border-gradient-to-r from-secondary to-accent shadow-2xl"
                    style={{
                      transform: `rotate(${state.wheelRotation}deg)`,
                      transition: state.spinning ? "transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
                    }}
                  >
                    {/* Wheel segments */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary via-accent to-secondary opacity-80"></div>
                    <div className="absolute inset-2 rounded-full bg-black/40"></div>
                    <div className="absolute inset-8 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-3xl font-bold">
                          {state.winningNumber !== null ? state.winningNumber : "?"}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pointer */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-0 h-0 border-l-8 border-r-8 border-t-12 border-l-transparent border-r-transparent border-t-yellow-400"></div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="text-center text-xl font-bold text-cyan-400 mb-6 min-h-8">
                {state.message}
              </div>

              {/* Betting Options */}
              <div className="mb-8">
                <h3 className="text-white font-bold text-lg mb-4">Select Your Bet:</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {Object.entries(getBetPayouts()).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => dispatch({ type: "SELECT_BET", bet: key })}
                      disabled={state.spinning}
                      className={`p-3 rounded-lg font-bold transition-all transform hover:scale-105 ${
                        state.selectedBet === key
                          ? "bg-gradient-to-r from-secondary to-accent text-white shadow-lg"
                          : "bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/20"
                      } ${state.spinning && "opacity-50 cursor-not-allowed"}`}
                    >
                      <div className="text-sm">{value.label}</div>
                      <div className="text-xs mt-1">{value.payout}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-cyan-400/10 rounded-xl p-4 border border-cyan-400/30 text-center">
                  <div className="text-cyan-400 text-sm">Bet Amount</div>
                  <div className="text-2xl font-bold text-white">{BET_AMOUNT.toLocaleString()}</div>
                </div>
                <div className="bg-cyan-400/10 rounded-xl p-4 border border-cyan-400/30 text-center">
                  <div className="text-cyan-400 text-sm">Last Win</div>
                  <div className="text-2xl font-bold text-yellow-400">{state.lastWinnings.toLocaleString()}</div>
                </div>
                <div className="bg-cyan-400/10 rounded-xl p-4 border border-cyan-400/30 text-center">
                  <div className="text-cyan-400 text-sm">Winning #</div>
                  <div className="text-2xl font-bold text-white">
                    {state.winningNumber !== null ? state.winningNumber : "-"}
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex gap-4 justify-center flex-wrap">
                <Button
                  onClick={handleSpin}
                  disabled={state.spinning || !state.selectedBet}
                  className="bg-gradient-to-r from-secondary to-accent text-white hover:opacity-90 font-bold px-12 py-4 text-lg shadow-lg disabled:opacity-50"
                >
                  {state.spinning ? "SPINNING..." : "SPIN (10,000)"}
                </Button>
                <Button
                  onClick={() => dispatch({ type: "RESET" })}
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-bold px-6 py-3"
                >
                  <RotateCcw size={20} className="mr-2" />
                  Reset
                </Button>
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <div className="bg-gradient-to-br from-black/60 to-purple-900/60 backdrop-blur rounded-3xl p-6 shadow-2xl border border-cyan-400/20 h-fit">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">How to Play</h2>
              <Info size={24} className="text-cyan-400" />
            </div>

            <div className="space-y-6 text-gray-200">
              <div className="bg-cyan-400/10 rounded-xl p-4 border border-cyan-400/30">
                <h3 className="font-bold text-cyan-400 mb-2 text-lg">Objective</h3>
                <p className="text-sm leading-relaxed">
                  Select a bet type, spin the wheel, and match the winning number or category to win!
                </p>
              </div>

              <div className="bg-cyan-400/10 rounded-xl p-4 border border-cyan-400/30">
                <h3 className="font-bold text-cyan-400 mb-3 text-lg">Bet Types</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Single Number:</span>
                    <span className="text-yellow-400 font-bold">36:1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Red/Black/Odd/Even:</span>
                    <span className="text-yellow-400 font-bold">1:1</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dozens (1-12, etc):</span>
                    <span className="text-yellow-400 font-bold">2:1</span>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-400/10 rounded-xl p-4 border border-cyan-400/30">
                <h3 className="font-bold text-cyan-400 mb-2 text-lg">Strategy</h3>
                <p className="text-sm leading-relaxed">
                  Higher payouts (like single numbers) are riskier. Lower payouts (like red/black) are more likely to win!
                </p>
              </div>

              <div className="bg-accent/20 rounded-xl p-4 border border-accent/50">
                <h3 className="font-bold text-accent mb-2 text-lg">Bet Amount</h3>
                <p className="text-lg font-bold text-yellow-400">
                  {BET_AMOUNT.toLocaleString()} credits per spin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
