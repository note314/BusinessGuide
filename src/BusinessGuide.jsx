import React, { useState } from 'react';
import { CheckCircle, Circle, BookOpen, Target, Lightbulb } from 'lucide-react';

const BusinessGuide = () => {
  const [responses, setResponses] = useState(Array(10).fill(''));

  const checkpoints = [
    "現在の状況を具体的に書き出してみましょう",
    "行動できない理由を明確にしてみましょう",
    "理想の状態を詳しく描いてみましょう",
    "最初の小さな一歩を決めてみましょう",
    "行動の障害となるものを特定してみましょう",
    "成功した時の具体的なメリットを書き出してみましょう",
    "失敗を恐れる気持ちと向き合ってみましょう",
    "サポートしてくれる人や資源を見つけてみましょう",
    "行動計画のスケジュールを立ててみましょう",
    "自分へのご褒美や動機づけを考えてみましょう"
  ];

  const handleInputChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const getCompletionCount = () => {
    return responses.filter(response => response.trim().length > 0).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            行動できない自分を変える10のチェックポイント
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            自己発見のためのワークブック
          </p>
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Target className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium text-gray-700">
              進行状況: {getCompletionCount()}/10 完了
            </span>
            <div className="w-32 bg-gray-200 rounded-full h-2 ml-4">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(getCompletionCount() / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Checkpoints Grid */}
        <div className="grid gap-6 md:gap-8">
          {checkpoints.map((checkpoint, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    responses[index].trim().length > 0 
                      ? 'bg-gradient-to-r from-green-400 to-blue-500' 
                      : 'bg-gradient-to-r from-gray-300 to-gray-400'
                  }`}>
                    {responses[index].trim().length > 0 ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : (
                      <Circle className="w-6 h-6 text-white" />
                    )}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                      {index + 1}
                    </span>
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {checkpoint}
                  </h3>
                  
                  <textarea
                    value={responses[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    placeholder="ここに思ったことを自由に書いてください..."
                    className="w-full h-32 p-4 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-200 resize-none transition-all duration-200 bg-white/80 backdrop-blur-sm"
                    rows={4}
                  />
                  
                  {responses[index].trim().length > 0 && (
                    <div className="mt-2 text-sm text-green-600 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      記入完了
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Completion Message */}
        {getCompletionCount() === 10 && (
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-8 text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-2">おめでとうございます！</h2>
              <p className="text-lg opacity-90">
                すべてのチェックポイントが完了しました。行動への第一歩を踏み出しましょう！
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          <p>あなたの成長を応援しています 💪</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessGuide;