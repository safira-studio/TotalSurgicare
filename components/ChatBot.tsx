// "use client";

// import { useState } from "react";
// import { MessageCircle, X, Send } from "lucide-react";

// export default function ChatBot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<
//     { role: "user" | "assistant"; content: string }[]
//   >([
//     {
//       role: "assistant",
//       content:
//         "Hello! I'm your healthcare assistant. How can I help you today?",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMessage = input.trim();

//     setInput("");
//     setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await fetch("/api/chat/chatbot", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ message: userMessage }),
//       });

//       const data = await response.json();

//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", content: data.message },
//       ]);
//     } catch (error) {
//       console.error("Error sending message:", error);
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "assistant",
//           content:
//             "I apologize, but I'm having trouble connecting right now. Please try again later.",
//         },
//       ]);
//     }

//     setIsLoading(false);
//   };

//   return (
//     <>
//       <button
//         className="fixed bottom-4 left-4 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors z-50"
//         onClick={() => setIsOpen(true)}
//       >
//         <MessageCircle className="h-6 w-6" />
//       </button>

//       {isOpen && (
//         <div className="fixed bottom-20 left-4 w-80 bg-white rounded-lg shadow-xl z-50">
//           <div className="flex items-center justify-between p-4 border-b">
//             <h3 className="text-lg font-semibold">Healthcare Assistant</h3>
//             <button
//               className="text-gray-500 hover:text-gray-700"
//               onClick={() => setIsOpen(false)}
//             >
//               <X className="h-5 w-5" />
//             </button>
//           </div>

//           <div className="h-96 overflow-y-auto p-4 space-y-4">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`flex ${
//                   message.role === "user" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`max-w-[80%] rounded-lg p-3 ${
//                     message.role === "user"
//                       ? "bg-blue-600 text-white"
//                       : "bg-gray-100 text-gray-800"
//                   }`}
//                 >
//                   {message.content}
//                 </div>
//               </div>
//             ))}
//             {isLoading && (
//               <div className="flex justify-start">
//                 <div className="bg-gray-100 rounded-lg p-3 text-gray-800">
//                   Typing...
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="p-4 border-t">
//             <div className="flex space-x-2">
//               <input
//                 className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Type your message..."
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && handleSend()}
//               />
//               <button
//                 className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors disabled:bg-blue-400"
//                 disabled={isLoading}
//                 onClick={handleSend}
//               >
//                 <Send className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
