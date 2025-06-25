import React, { useState } from 'react';
import { CheckCircle, Lightbulb, Target, ArrowRight, Heart, Users, Gift, BookOpen, Star, Zap } from 'lucide-react';

const SelfDiscovery10Steps = () => {
  const [workAnswers, setWorkAnswers] = useState({});

  const handleWorkAnswerChange = (questionId, value) => {
    setWorkAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };
  const characteristics = [
    {
      id: 1,
      title: "体験不足（メンタルブロック）",
      description: "「自分には無理」「できるわけがない」と決めつけ、行動を止めてしまう思考。これが体験の機会を奪っている。",
      example: "プログラミングに興味があるが「文系だから無理」と決めつけて学習サイトすら見ない",
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 2,
      title: "失敗を過剰に恐れる",
      description: "失敗＝ダメなこと、と強く思い込みすぎると行動が止まり、経験が得られなくなる。結果を恐れず、小さく試すクセをつけることが重要。",
      example: "副業を始めたいが「失敗したら恥ずかしい」と思い、調べることすらしない",
      icon: <Heart className="w-6 h-6" />
    },
    {
      id: 3,
      title: "思い込みと常識を疑わない",
      description: "自分がつくった常識をそのまま信じている。「もしかしたら自分にもできるかも」と思うところから変化が始まる。常識を変えると違和感が出るが、その違和感こそ、意識が動き出したサインだと受け取ろう。",
      example: "「転職は30代までが限界」と思い込み、40代でも可能性を探らない",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      id: 4,
      title: "最初のハードルが高すぎる",
      description: "うまくやろうとせず、「なんとなくやってみて失敗する」ことが大切。失敗と成功を振り返り、また動く。成功体験とは、失敗と挑戦の繰り返し。",
      example: "",
      icon: <ArrowRight className="w-6 h-6" />,
      steps: [
        "Step1: 自分にできそうなことから（週1回、10分だけでも）",
        "Step2: 一流の人を「観察」で学ぶ。盗むように見る",
        "Step3: 小さな失敗を積み重ね、パターンを掴む"
      ]
    },
    {
      id: 5,
      title: "自分の好き・嫌いを知らない",
      description: "「何が好きか／嫌いか」がわからないままでは、やりたいことの輪郭がつかめない。小さな選択に目を向けて、自分の傾向に気づくことから始める。",
      example: "",
      icon: <Star className="w-6 h-6" />,
      points: [
        "どんな話題で時間を忘れるか",
        "何をしている時に疲れを感じないか",
        "SNSで無意識にチェックしてしまう情報は何か"
      ]
    }
  ];

  const workQuestions = [
    { id: 1, text: "挑戦したこと", icon: <Target className="w-5 h-5" /> },
    { id: 2, text: "成長を実感したこと", icon: <ArrowRight className="w-5 h-5" /> },
    { id: 3, text: "達成したこと", icon: <CheckCircle className="w-5 h-5" /> },
    { id: 4, text: "社会に貢献できたと感じたこと", icon: <Heart className="w-5 h-5" /> },
    { id: 5, text: "チームと楽しかったこと", icon: <Users className="w-5 h-5" /> },
    { id: 6, text: "感謝した人間関係", icon: <Gift className="w-5 h-5" /> },
    { id: 7, text: "感謝されたこと", icon: <Star className="w-5 h-5" /> },
    { id: 8, text: "出会い", icon: <Heart className="w-5 h-5" /> },
    { id: 9, text: "教わったこと・教えたこと", icon: <BookOpen className="w-5 h-5" /> },
    { id: 10, text: "難題を乗り越えたこと", icon: <Zap className="w-5 h-5" /> }
  ];

  const thinkingPatterns = [
    {
      id: 6,
      title: "自己理解が浅い",
      description: "自分の現実と認識にズレがある。客観的に自分を見る機会を意識的に作ろう。",
      solution: "信頼できる人に率直な意見を求める、日記で自分の行動を振り返る"
    },
    {
      id: 7,
      title: "他人のせいにする",
      description: "環境や他人の影響ばかり気にしてしまう。確かに環境は大切だが、自分にできることから始めることで道は開ける。",
      solution: ""
    },
    {
      id: 8,
      title: "反骨心を活かせていない",
      description: "コンプレックスはむしろ推進力になる。「見返してやりたい」「証明したい」という気持ちも大切なエネルギー源。",
      solution: ""
    },
    {
      id: 9,
      title: "感情が湧いた時に行動に移せない",
      description: "「やってみたい」と思った瞬間の熱を大切にする。時間が経つほど理由をつけて諦めやすくなる。",
      solution: "興味を持った瞬間に、まず15分だけでも関連する情報を調べてみる"
    },
    {
      id: 10,
      title: "心のブレーキに負けてしまう",
      description: "恒常性（ホメオスタシス）：人間には現状を維持しようとする本能的な仕組みがある。新しいことを始めようとすると「やめた方がいい」という声が聞こえるのは自然な反応。",
      solution: "無意味な疑問で自分を疲れさせない、考えすぎる時間を減らし習慣として小さな行動を継続する、完璧主義の「思考のゴミ」を手放す"
    }
  ];

  const phases = [
    {
      title: "Phase 1: 情報収集",
      items: [
        "少しでも気になることを紙に書く - 判断は後回し。まずは「なんとなく気になる」レベルでリストアップ",
        "経験していないことを書き出す - 「やったことがないけれど、もしかしたら...」という項目も含める"
      ]
    },
    {
      title: "Phase 2: 小さな実験",
      items: [
        "無駄に見えても、経験してから判断する - 頭で考えるより、実際に触れてみる。1日体験や見学から始めても良い",
        "「臨場感」を持って行動する - その場にいる自分を想像し、リアルに感じながら行動する"
      ]
    },
    {
      title: "Phase 3: 行動の継続",
      items: [
        "「〜がないからできない」は一旦置いておく - 制約を理由にするのではなく、「今できること」に焦点を当てる",
        "五感で感じる習慣をつける - 体験した時にどう感じたか、身体の反応も含めて記録する"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              受講特典 実践ワーク
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              行動できない自分を変える
              <span className="text-blue-600 block mt-2">10のチェックポイント</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              挑戦への心理的障壁を乗り越えるガイド
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Section 1: 特徴 */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              自分のやりたいことがわからない人の特徴
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {characteristics.map((item, index) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                          {index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">{item.description}</p>
                      
                      {item.example && (
                        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                          <p className="text-sm text-amber-800">
                            <span className="font-semibold">例：</span> {item.example}
                          </p>
                        </div>
                      )}
                      
                      {item.steps && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-gray-900 mb-3">段階的アプローチ：</h4>
                          <div className="space-y-2">
                            {item.steps.map((step, stepIndex) => (
                              <div key={stepIndex} className="flex items-center gap-3 text-sm text-gray-700">
                                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                {step}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {item.points && (
                        <div className="mt-4">
                          <h4 className="font-semibold text-gray-900 mb-3">日常の観察ポイント：</h4>
                          <div className="space-y-2">
                            {item.points.map((point, pointIndex) => (
                              <div key={pointIndex} className="flex items-center gap-3 text-sm text-gray-700">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                {point}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: ワーク */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              「〜〜で」をテーマに自分を掘るワーク
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full mb-6"></div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed">
                以下のフレーズについて、「〜〜で、」から始まる経験談を自由に書き出す。
                事実・感情・気づきなど、どの角度から書いてもよい。具体的に書くことで、自分のパターンや価値観が見えてくる。
              </p>
              <p className="text-sm text-green-700 mt-4 font-semibold">
                記入のコツ：完璧を求めず、思い浮かんだことをそのまま書く。小さな体験でも構わない。
              </p>
              <p className="text-sm text-green-600 mt-3 italic">
                （例）大学受験で第一志望を目指して苦手教科に取り組んだ。
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workQuestions.map((question) => (
              <div key={question.id} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white">
                    {question.icon}
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 font-medium">Question {question.id}</span>
                    <h3 className="font-semibold text-gray-900">{question.text}</h3>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg border border-gray-300 p-3">
                  <textarea
                    className="w-full h-16 bg-transparent border-none resize-none outline-none text-gray-700 placeholder-gray-400 text-sm"
                    placeholder="「〜〜で、」から始まる経験を記入してください..."
                    value={workAnswers[question.id] || ''}
                    onChange={(e) => handleWorkAnswerChange(question.id, e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: 思考のクセ */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              やりたいことが見えづらくなる思考のクセ
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            {thinkingPatterns.map((pattern, index) => (
              <div key={pattern.id} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {index + 6}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{pattern.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{pattern.description}</p>
                    {pattern.solution && (
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                        <p className="text-sm text-blue-800">
                          <span className="font-semibold">対処法：</span> {pattern.solution}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: 段階的アプローチ */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              やりたいことを見つける段階的アプローチ
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {phases.map((phase, phaseIndex) => (
              <div key={phaseIndex} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-4">
                  <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {phase.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-semibold text-sm">
                          {itemIndex + 1}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 leading-relaxed">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Message */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 sm:p-12 text-white">
            <div className="max-w-2xl mx-auto">
              <Heart className="w-12 h-12 mx-auto mb-6 text-blue-200" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">最後に</h2>
              <p className="text-lg leading-relaxed text-blue-100 mb-6">
                挑戦への不安は誰にでもある自然な感情です。完璧を目指さず、小さな一歩から始めることで、自分でも驚くような発見があるはずです。
              </p>
              <p className="text-blue-200 font-medium">
                このガイドを参考に、あなたなりのペースで進んでいってください。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SelfDiscovery10Steps;