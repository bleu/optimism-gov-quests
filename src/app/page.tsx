"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import React, { useState } from "react";
import {
  UserCircle,
  Award,
  TrendingUp,
  Vote,
  Bell,
  BookOpen,
  Target,
  Users,
  Settings,
  PieChart,
  Smartphone,
  Globe,
  Leaf,
  Handshake,
  Rocket,
  MessageSquare,
  Zap,
  Gift,
  Sword,
  Calendar,
} from "lucide-react";

const MockupUI = () => {
  const [activeTab, setActiveTab] = useState("home");

  const TabButton = ({ id, icon, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center p-2 ${activeTab === id ? "bg-red-100 text-red-600" : "text-gray-600"} rounded-lg`}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );

  const TabContent = ({ id, children }) => (
    <div className={`${activeTab === id ? "block" : "hidden"} mt-4`}>
      {children}
    </div>
  );

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Optimism Governance Adventure</h1>

      <div className="grid grid-cols-5 gap-4 mb-4">
        <TabButton
          id="home"
          icon={<UserCircle className="w-5 h-5" />}
          label="Home"
        />
        <TabButton
          id="quests"
          icon={<Sword className="w-5 h-5" />}
          label="Quests"
        />
        <TabButton
          id="proposals"
          icon={<Vote className="w-5 h-5" />}
          label="Proposals"
        />
        <TabButton
          id="learn"
          icon={<BookOpen className="w-5 h-5" />}
          label="Learn"
        />
        <TabButton
          id="community"
          icon={<Users className="w-5 h-5" />}
          label="Community"
        />
      </div>

      <TabContent id="home">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Your Avatar</h2>
            <div className="w-20 h-20 bg-red-200 rounded-full mx-auto mb-2"></div>
            <p className="text-center">Level 5 Governance Enthusiast</p>
            <button className="mt-2 w-full bg-red-500 text-white px-4 py-2 rounded">
              Customize
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Daily Challenge</h2>
            <Target className="w-8 h-8 text-red-500 mb-2" />
            <p>Vote on 3 proposals today</p>
            <p className="text-sm text-gray-600">Reward: 100 XP + Rare Emote</p>
            <div className="mt-2 bg-gray-200 rounded-full h-4">
              <div
                className="bg-red-500 h-4 rounded-full"
                style={{ width: "66%" }}
              ></div>
            </div>
            <p className="text-right text-sm mt-1">2/3 completed</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Power-Ups</h2>
            <Zap className="w-8 h-8 text-yellow-500 mb-2" />
            <p>Active: 2x XP Boost (1h left)</p>
            <button className="mt-2 w-full bg-yellow-500 text-white px-4 py-2 rounded">
              Use Power-Up
            </button>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Achievement Tree</h2>
            <div className="h-40 bg-red-100 rounded flex items-center justify-center">
              [Visual Achievement Tree]
            </div>
            <button className="mt-2 w-full bg-red-500 text-white px-4 py-2 rounded">
              View Full Tree
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">
              Attestations Showcase
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-200 h-16 rounded flex items-center justify-center"
                >
                  Attestation {i + 1}
                </div>
              ))}
            </div>
            <button className="mt-2 w-full bg-orange-500 text-white px-4 py-2 rounded">
              View All
            </button>
          </div>
        </div>
      </TabContent>

      <TabContent id="quests">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Active Quests</h2>
            <div className="mb-4">
              <h3 className="font-medium">The Optimistic Delegate</h3>
              <p className="text-sm text-gray-600">
                Progress: 2/5 tasks completed
              </p>
              <div className="mt-2 bg-gray-200 rounded-full h-4">
                <div
                  className="bg-red-500 h-4 rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
            <div>
              <h3 className="font-medium">Governance Guardian</h3>
              <p className="text-sm text-gray-600">
                Progress: 3/7 tasks completed
              </p>
              <div className="mt-2 bg-gray-200 rounded-full h-4">
                <div
                  className="bg-red-500 h-4 rounded-full"
                  style={{ width: "43%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Quest Rewards</h2>
            <div className="flex items-center mb-2">
              <Gift className="w-5 h-5 text-red-500 mr-2" />
              <span>Exclusive "Quest Champion" Title</span>
            </div>
            <div className="flex items-center">
              <Gift className="w-5 h-5 text-gold-500 mr-2" />
              <span>Rare "Optimism Pioneer" Attestation</span>
            </div>
          </div>
        </div>
      </TabContent>

      <TabContent id="proposals">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Hot Proposals</h2>
            <div className="mb-4">
              <h3 className="font-medium">
                Proposal #123: Infrastructure Upgrade
              </h3>
              <p className="text-sm text-gray-600">
                Time left: 2 days | Votes: 1205
              </p>
              <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
                Vote Now
              </button>
            </div>
            <div>
              <h3 className="font-medium">
                Proposal #124: Community Fund Allocation
              </h3>
              <p className="text-sm text-gray-600">
                Time left: 5 days | Votes: 876
              </p>
              <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
                Vote Now
              </button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Voting Streak</h2>
            <div className="flex justify-between mb-2">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full ${i < 5 ? "bg-red-500" : "bg-gray-200"} flex items-center justify-center text-white`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <p>Current streak: 5 days</p>
            <p className="text-sm text-gray-600">
              Reward at 7 days: 500 XP + "Week Warrior" Badge
            </p>
          </div>
        </div>
      </TabContent>

      <TabContent id="learn">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Governance Academy</h2>
            <div className="mb-4">
              <h3 className="font-medium">Daily Quiz Challenge</h3>
              <p className="text-sm text-gray-600">
                Test your knowledge and earn XP!
              </p>
              <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
                Start Quiz
              </button>
            </div>
            <div>
              <h3 className="font-medium">Optimism Lore</h3>
              <p className="text-sm text-gray-600">
                Unlock the secrets of Optimism's history
              </p>
              <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded">
                Explore Lore
              </button>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Mini-Games</h2>
            <p>Play and learn about governance concepts</p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Proposal Puzzle
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Vote Match
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                DAO Dash
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Govern & Conquer
              </button>
            </div>
          </div>
        </div>
      </TabContent>

      <TabContent id="community">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">
              Your Guild: Optimistic Oracles
            </h2>
            <p>Guild Level: 7 | Members: 128</p>
            <p className="text-sm text-gray-600">
              Next goal: Win the weekly tournament
            </p>
            <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded">
              Guild Hall
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">
              Leaderboard Tournament
            </h2>
            <p>Current Event: Proposal Prediction Challenge</p>
            <p className="text-sm text-gray-600">
              Your Rank: #23 | Top Prize: 10,000 XP + Legendary Attestation
            </p>
            <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded">
              View Standings
            </button>
          </div>
        </div>
      </TabContent>

      <div className="mt-4 flex justify-between items-center bg-white p-4 rounded-lg shadow">
        <div className="flex items-center">
          <Calendar className="w-5 h-5 text-red-500 mr-2" />
          <span>Seasonal Event: Optimism Summer Festival (2 weeks left)</span>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Join Event
        </button>
      </div>
    </div>
  );
};

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <MockupUI />
    // <>
    //   <div>
    //     <h2>Account</h2>

    //     <div>
    //       status: {account.status}
    //       <br />
    //       addresses: {JSON.stringify(account.addresses)}
    //       <br />
    //       chainId: {account.chainId}
    //     </div>

    //     {account.status === 'connected' && (
    //       <button type="button" onClick={() => disconnect()}>
    //         Disconnect
    //       </button>
    //     )}
    //   </div>

    //   <div>
    //     <h2>Connect</h2>
    //     {connectors.map((connector) => (
    //       <button
    //         key={connector.uid}
    //         onClick={() => connect({ connector })}
    //         type="button"
    //       >
    //         {connector.name}
    //       </button>
    //     ))}
    //     <div>{status}</div>
    //     <div>{error?.message}</div>
    //   </div>
    // </>
  );
}

export default App;
