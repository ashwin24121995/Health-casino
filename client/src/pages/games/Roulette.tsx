import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface BetSelection {
  type: 'number' | 'color' | 'oddeven' | 'range' | 'dozen' | 'column';
  value: string | number;
  amount: number;
}

const RED_NUMBERS = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];

export default function Roulette() {
  const [credits, setCredits] = useState(1000000);
  const [betAmount, setBetAmount] = useState(10000);
  const [selectedBets, setSelectedBets] = useState<BetSelection[]>([]);
  const [spinning, setSpinning] = useState(false);
  const [lastNumber, setLastNumber] = useState<number | null>(null);
  const [lastWin, setLastWin] = useState(0);
  const [wheelRotation, setWheelRotation] = useState(0);
  const [message, setMessage] = useState('');
  const [resultDisplay, setResultDisplay] = useState<string>('');

  const placeBet = (type: string, value: string | number) => {
    if (credits < betAmount) {
      setMessage('Insufficient credits!');
      return;
    }

    const newBet: BetSelection = {
      type: type as any,
      value,
      amount: betAmount,
    };

    setSelectedBets([...selectedBets, newBet]);
    setCredits(credits - betAmount);
    setMessage(`Bet placed: ${betAmount.toLocaleString()} credits`);
    setTimeout(() => setMessage(''), 2000);
  };

  const spin = () => {
    if (selectedBets.length === 0) {
      setMessage('Place a bet first!');
      return;
    }

    setSpinning(true);
    setMessage('Spinning...');
    const randomNumber = Math.floor(Math.random() * 37);
    const spins = 5 + Math.random() * 3;
    const rotation = (randomNumber * 9.73) + (spins * 360);
    
    setWheelRotation(rotation);

    setTimeout(() => {
      setLastNumber(randomNumber);
      calculateWinnings(randomNumber);
      setSpinning(false);
    }, 3000);
  };

  const calculateWinnings = (number: number) => {
    let totalWin = 0;
    let resultText = '';

    selectedBets.forEach((bet) => {
      let won = false;
      let multiplier = 0;

      if (bet.type === 'number' && bet.value === number) {
        won = true;
        multiplier = 36;
      } else if (bet.type === 'color') {
        const isRed = RED_NUMBERS.includes(number);
        if ((bet.value === 'red' && isRed) || (bet.value === 'black' && !isRed)) {
          won = true;
          multiplier = 1;
        }
      } else if (bet.type === 'oddeven') {
        const isOdd = number % 2 === 1;
        if ((bet.value === 'odd' && isOdd) || (bet.value === 'even' && !isOdd)) {
          won = true;
          multiplier = 1;
        }
      } else if (bet.type === 'range') {
        if ((bet.value === 'low' && number >= 1 && number <= 18) ||
            (bet.value === 'high' && number >= 19 && number <= 36)) {
          won = true;
          multiplier = 1;
        }
      } else if (bet.type === 'dozen') {
        const dozen = Math.floor((number - 1) / 12) + 1;
        if (bet.value === `dozen${dozen}` && number !== 0) {
          won = true;
          multiplier = 2;
        }
      } else if (bet.type === 'column') {
        const column = ((number - 1) % 3) + 1;
        if (bet.value === `col${column}` && number !== 0) {
          won = true;
          multiplier = 2;
        }
      }

      if (won) {
        totalWin += bet.amount * (multiplier + 1);
      }
    });

    // Build result text
    const isRed = RED_NUMBERS.includes(number);
    const isOdd = number % 2 === 1;
    const range = number === 0 ? '' : (number >= 1 && number <= 18 ? 'LOW' : 'HIGH');
    const color = isRed ? 'RED' : (number === 0 ? 'GREEN' : 'BLACK');
    const oddEven = number === 0 ? '' : (isOdd ? 'ODD' : 'EVEN');
    
    resultText = `${number} ${color}`;
    if (oddEven) resultText += ` ${oddEven}`;
    if (range) resultText += ` ${range}`;

    setResultDisplay(resultText);
    setLastWin(totalWin);
    setCredits(credits + totalWin);
    setSelectedBets([]);

    if (totalWin > 0) {
      setMessage(`🎉 WIN! +${totalWin.toLocaleString()}`);
    } else {
      setMessage('💣 NO WIN');
    }
  };

  const reset = () => {
    setCredits(1000000);
    setSelectedBets([]);
    setLastNumber(null);
    setLastWin(0);
    setWheelRotation(0);
    setMessage('');
    setResultDisplay('');
  };

  const clearBets = () => {
    const returnedCredits = selectedBets.reduce((sum, bet) => sum + bet.amount, 0);
    setCredits(credits + returnedCredits);
    setSelectedBets([]);
    setMessage('Bets cleared');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 px-4">
          <div>
            <h1 className="text-4xl font-bold text-yellow-400">🎡 ROULETTE</h1>
            <p className="text-yellow-300 text-sm">Spin the Wheel and Win Big</p>
          </div>
          <div className="text-right">
            <div className="text-yellow-300 text-sm">YOUR CREDITS</div>
            <div className="text-3xl font-bold text-yellow-400">{credits.toLocaleString()}</div>
          </div>
        </div>

        {/* Main Game Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Left: Wheel */}
          <div className="lg:col-span-1 flex flex-col items-center">
            {/* Realistic Roulette Wheel */}
            <div className="relative w-64 h-64 mb-4">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-8 border-yellow-600 shadow-2xl" style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent)',
              }}>
                {/* Wheel */}
                <div
                  className="w-full h-full rounded-full flex items-center justify-center transition-transform duration-3000"
                  style={{
                    transform: `rotate(${wheelRotation}deg)`,
                    background: 'conic-gradient(from 0deg, #000 0deg 9.73deg, #c41e3a 9.73deg 19.46deg, #000 19.46deg 29.19deg, #c41e3a 29.19deg 38.92deg, #000 38.92deg 48.65deg, #c41e3a 48.65deg 58.38deg, #000 58.38deg 68.11deg, #c41e3a 68.11deg 77.84deg, #000 77.84deg 87.57deg, #c41e3a 87.57deg 97.3deg, #000 97.3deg 107.03deg, #c41e3a 107.03deg 116.76deg, #000 116.76deg 126.49deg, #c41e3a 126.49deg 136.22deg, #000 136.22deg 145.95deg, #c41e3a 145.95deg 155.68deg, #000 155.68deg 165.41deg, #c41e3a 165.41deg 175.14deg, #000 175.14deg 184.87deg, #c41e3a 184.87deg 194.6deg, #000 194.6deg 204.33deg, #c41e3a 204.33deg 214.06deg, #000 214.06deg 223.79deg, #c41e3a 223.79deg 233.52deg, #000 233.52deg 243.25deg, #c41e3a 243.25deg 252.98deg, #000 252.98deg 262.71deg, #c41e3a 262.71deg 272.44deg, #000 272.44deg 282.17deg, #c41e3a 282.17deg 291.9deg, #000 291.9deg 301.63deg, #c41e3a 301.63deg 311.36deg, #000 311.36deg 321.09deg, #c41e3a 321.09deg 330.82deg, #000 330.82deg 340.55deg, #c41e3a 340.55deg 350.28deg, #22c55e 350.28deg 360deg)',
                  }}
                >
                  {/* Center */}
                  <div className="w-16 h-16 rounded-full bg-gray-800 border-4 border-yellow-600 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  </div>
                </div>
              </div>

              {/* Pointer */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 z-10">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-l-transparent border-r-transparent border-t-yellow-400"></div>
              </div>
            </div>

            {/* Result Box */}
            <div className="w-full bg-gradient-to-b from-gray-800 to-gray-900 border-2 border-yellow-600 rounded-lg p-4 text-center mb-4 shadow-lg">
              <div className="text-yellow-300 text-xs uppercase tracking-wider mb-2">Last Result</div>
              {lastNumber !== null ? (
                <div>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{lastNumber}</div>
                  <div className="text-sm text-yellow-300">{resultDisplay}</div>
                </div>
              ) : (
                <div className="text-2xl text-gray-400">-</div>
              )}
            </div>

            {/* Bet Info */}
            <div className="w-full bg-gray-800 border border-yellow-600 rounded p-3 text-center text-sm">
              <div className="text-yellow-300">Bet: {betAmount.toLocaleString()}</div>
              <div className="text-green-400">Bets: {selectedBets.length}</div>
            </div>
          </div>

          {/* Right: Betting Table */}
          <div className="lg:col-span-2">
            {/* Message */}
            {message && (
              <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-gray-900 font-bold py-2 px-4 rounded mb-4 text-center">
                {message}
              </div>
            )}

            {/* Roulette Table */}
            <div className="bg-gradient-to-b from-green-700 to-green-800 border-4 border-yellow-600 rounded-lg p-6 shadow-2xl mb-4">
              {/* Table Header */}
              <div className="text-center mb-4">
                <div className="text-yellow-400 text-2xl font-bold tracking-wider">ROULETTE TABLE</div>
              </div>

              {/* Number Grid */}
              <div className="grid grid-cols-13 gap-1 mb-6 bg-green-900 p-3 rounded">
                {/* 0 */}
                <button
                  onClick={() => placeBet('number', 0)}
                  disabled={spinning}
                  className="col-span-13 bg-gradient-to-b from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-2 rounded border-2 border-yellow-500 disabled:opacity-50"
                >
                  0
                </button>

                {/* Numbers 1-36 */}
                {Array.from({ length: 36 }, (_, i) => i + 1).map((num) => {
                  const isRed = RED_NUMBERS.includes(num);
                  return (
                    <button
                      key={num}
                      onClick={() => placeBet('number', num)}
                      disabled={spinning}
                      className={`${
                        isRed
                          ? 'bg-gradient-to-b from-red-600 to-red-700 hover:from-red-500 hover:to-red-600'
                          : 'bg-gradient-to-b from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800'
                      } text-white font-bold py-2 rounded border-2 border-yellow-500 disabled:opacity-50 text-sm`}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>

              {/* Outside Bets */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <button
                  onClick={() => placeBet('range', 'low')}
                  disabled={spinning}
                  className="bg-gradient-to-b from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-2 rounded border-2 border-yellow-500 disabled:opacity-50 text-sm"
                >
                  1-18
                </button>
                <button
                  onClick={() => placeBet('oddeven', 'even')}
                  disabled={spinning}
                  className="bg-gradient-to-b from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-2 rounded border-2 border-yellow-500 disabled:opacity-50 text-sm"
                >
                  EVEN
                </button>
                <button
                  onClick={() => placeBet('color', 'red')}
                  disabled={spinning}
                  className="bg-gradient-to-b from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-2 rounded border-2 border-yellow-500 disabled:opacity-50 text-sm"
                >
                  RED
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => placeBet('range', 'high')}
                  disabled={spinning}
                  className="bg-gradient-to-b from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-2 rounded border-2 border-yellow-500 disabled:opacity-50 text-sm"
                >
                  19-36
                </button>
                <button
                  onClick={() => placeBet('oddeven', 'odd')}
                  disabled={spinning}
                  className="bg-gradient-to-b from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-2 rounded border-2 border-yellow-500 disabled:opacity-50 text-sm"
                >
                  ODD
                </button>
                <button
                  onClick={() => placeBet('color', 'black')}
                  disabled={spinning}
                  className="bg-gradient-to-b from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-2 rounded border-2 border-yellow-500 disabled:opacity-50 text-sm"
                >
                  BLACK
                </button>
              </div>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <Button
                onClick={spin}
                disabled={spinning || selectedBets.length === 0}
                className="bg-gradient-to-b from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold py-3 text-lg border-2 border-yellow-500 disabled:opacity-50"
              >
                {spinning ? 'SPINNING...' : 'SPIN'}
              </Button>
              <Button
                onClick={clearBets}
                disabled={spinning}
                className="bg-gradient-to-b from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold py-3 text-lg border-2 border-yellow-500 disabled:opacity-50"
              >
                CLEAR
              </Button>
              <Button
                onClick={reset}
                className="bg-gradient-to-b from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold py-3 text-lg border-2 border-yellow-500"
              >
                RESET
              </Button>
              <div className="bg-gray-800 border-2 border-yellow-600 rounded p-2 text-center">
                <div className="text-yellow-300 text-xs">WIN</div>
                <div className="text-yellow-400 font-bold">{lastWin.toLocaleString()}</div>
              </div>
            </div>

            {/* Bet Amount Controls */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[5000, 10000, 25000, 50000].map((amount) => (
                <Button
                  key={amount}
                  onClick={() => setBetAmount(amount)}
                  className={`py-2 font-bold border-2 ${
                    betAmount === amount
                      ? 'bg-gradient-to-b from-yellow-500 to-yellow-600 border-yellow-300 text-gray-900'
                      : 'bg-gradient-to-b from-gray-700 to-gray-800 border-yellow-600 text-yellow-400 hover:from-gray-600 hover:to-gray-700'
                  }`}
                >
                  {(amount / 1000).toFixed(0)}K
                </Button>
              ))}
            </div>

            {/* Total Bet Display */}
            <div className="bg-gray-800 border-2 border-yellow-600 rounded p-3 text-center">
              <div className="text-yellow-300 text-sm">TOTAL BET</div>
              <div className="text-2xl font-bold text-yellow-400">
                {(selectedBets.reduce((sum, b) => sum + b.amount, 0)).toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* How to Play */}
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 border-2 border-yellow-600 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">📖 HOW TO PLAY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-yellow-300">
              <h3 className="font-bold text-yellow-400 mb-2">OBJECTIVE</h3>
              <p className="text-sm">Place bets on numbers or outside bets. Spin the wheel and match the winning number to win!</p>
            </div>
            <div className="text-yellow-300">
              <h3 className="font-bold text-yellow-400 mb-2">BET TYPES</h3>
              <ul className="text-sm space-y-1">
                <li>• Single Number: 36:1 payout</li>
                <li>• Color/Odd/Even: 1:1 payout</li>
                <li>• Ranges (1-18/19-36): 1:1 payout</li>
              </ul>
            </div>
            <div className="text-yellow-300">
              <h3 className="font-bold text-yellow-400 mb-2">STRATEGY</h3>
              <p className="text-sm">Mix high-risk single numbers with safer outside bets for balanced gameplay.</p>
            </div>
            <div className="text-yellow-300">
              <h3 className="font-bold text-yellow-400 mb-2">RULES</h3>
              <p className="text-sm">Place multiple bets before spinning. Wheel determines winner. Payouts automatic.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
