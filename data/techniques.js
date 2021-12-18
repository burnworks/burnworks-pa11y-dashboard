// This file is part of Pa11y Dashboard.
//
// Pa11y Dashboard is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Pa11y Dashboard is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Pa11y Dashboard.  If not, see <http://www.gnu.org/licenses/>.

// jscs:disable maximumLineLength
'use strict';

module.exports = getTechniques;

function getTechniques() {
	return {
		H30: {
			title: 'H30: a 要素のリンクの目的を説明するリンクテキストを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H30'
		},
		H37: {
			title: 'H37: img 要素の alt 属性を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H37'
		},
		H67: {
			title: 'H67: 支援技術が無視すべき画像に対して、img 要素の alt テキストを空にして、title 属性を付与しない',
			url: 'https://waic.jp/docs/WCAG-TECHS/H67'
		},
		G94: {
			title: 'G94: 非テキストコンテンツに対して、それと同じ目的を果たし、かつ同じ情報を示す、簡潔なテキストによる代替を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G94'
		},
		H36: {
			title: 'H36: 送信ボタンとして用いる画像の alt 属性を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H36'
		},
		H24: {
			title: 'H24: イメージマップの area 要素にテキストによる代替を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H24'
		},
		G73: {
			title: 'G73: 非テキストコンテンツのすぐ隣に別の場所へのリンクを置き、その別の場所で長い説明を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G73'
		},
		G74: {
			title: 'G74: 短い説明の中で長い説明のある場所を示して、非テキストコンテンツの近くにあるテキストで長い説明を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G74'
		},
		H2: {
			title: 'H2: 同じリソースに対して隣接する画像とテキストリンクを結合する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H2'
		},
		H53: {
			title: 'H53: object 要素のボディを使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H53'
		},
		G92: {
			title: 'G92: 非テキストコンテンツに対して、それと同じ目的を果たし、かつ同じ情報を示す長い説明を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G92'
		},
		H35: {
			title: 'H35: applet 要素にテキストによる代替を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H35'
		},
		G158: {
			title: 'G158: 音声のみの時間依存メディアに対する代替コンテンツを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G158'
		},
		G159: {
			title: 'G159: 映像のみの時間依存メディアに対する代替コンテンツを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G159'
		},
		G166: {
			title: 'G166: 重要な映像コンテンツを説明する音声を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G166'
		},
		G87: {
			title: 'G87: クローズドキャプションを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G87'
		},
		G93: {
			title: 'G93: オープン (常に見える) キャプションを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G93'
		},
		G69: {
			title: 'G69: 時間依存メディアに対する代替コンテンツを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G69'
		},
		G78: {
			title: 'G78: 音声解説を含んだ、利用者が選択可能な副音声トラックを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G78'
		},
		G173: {
			title: 'G173: 映像の音声解説付きバージョンを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G173'
		},
		G8: {
			title: 'G8: 拡張音声解説が付いたムービーを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G8'
		},
		G9: {
			title: 'G9: ライブの同期したメディアに対してキャプションを作成する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G9'
		},
		G54: {
			title: 'G54: 映像ストリームに手話通訳を含める',
			url: 'https://waic.jp/docs/WCAG-TECHS/G54'
		},
		G81: {
			title: 'G81: プレーヤーによって別のビューポートに表示する、又は画像上に重ねることのできる、手話通訳の同期した映像を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G81'
		},
		G150: {
			title: 'G150: ライブの音声のみのコンテンツに対して、テキストベースの代替コンテンツを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G150'
		},
		G151: {
			title: 'G151: 台本に従う場合に、準備された声明又は台本のテキストトランスクリプトへのリンクを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G151'
		},
		G157: {
			title: 'G157: ライブの音声キャプションサービスをウェブページに組み込む',
			url: 'https://waic.jp/docs/WCAG-TECHS/G157'
		},
		H42: {
			title: 'H42: 見出しを特定するために、h1 要素～ h6 要素を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H42'
		},
		H93: {
			title: 'H93: ウェブページの id 属性値が一意的 (ユニーク) であるようにする',
			url: 'https://waic.jp/docs/WCAG-TECHS/H93'
		},
		H44: {
			title: 'H44: テキストラベルとフォームコントロールを関連付けるために、label 要素を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H44'
		},
		H65: {
			title: 'H65: label 要素を使用できない場合に、フォームコントロールを特定するために、title 属性を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H65'
		},
		H49: {
			title: 'H49: 強調又は特別なテキストをマークアップするために、セマンティックなマークアップを使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H49'
		},
		H63: {
			title: 'H63: データテーブルで見出しセルとデータセルを関連付けるために、scope 属性を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H63'
		},
		H43: {
			title: 'H43: データテーブルのデータセルを見出しセルと関連付けるために、id 属性及び headers 属性を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H43'
		},
		H39: {
			title: 'H39: データテーブルのキャプションとデータテーブルを関連付けるために、caption 要素を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H39'
		},
		H73: {
			title: 'H73: データテーブルの概要を提供するために、table 要素の summary 属性を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H73'
		},
		H71: {
			title: 'H71: fieldset 要素及び legend 要素を使用して、フォームコントロールのグループに関する説明を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H71'
		},
		H85: {
			title: 'H85: select 要素内の option 要素をグループ化するために、optgroup 要素を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H85'
		},
		H48: {
			title: 'H48: リスト又はリンクのグループに、ol 要素、ul 要素、dl 要素を用いる',
			url: 'https://waic.jp/docs/WCAG-TECHS/H48'
		},
		G141: {
			title: 'G141: 見出しを用いてウェブページを構造化する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G141'
		},
		G57: {
			title: 'G57: コンテンツを意味のある順序で並べる',
			url: 'https://waic.jp/docs/WCAG-TECHS/G57'
		},
		G96: {
			title: 'G96: 理解させる必要のあるアイテムを感覚的にだけ伝えるのではなく、テキストによる識別情報もあわせて提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G96'
		},
		G14: {
			title: 'G14: 色の違いで伝えている情報をテキストでも入手可能にする',
			url: 'https://waic.jp/docs/WCAG-TECHS/G14'
		},
		G182: {
			title: 'G182: 文字色の違いが情報を伝えるために使用される場合に、利用可能な追加の視覚的な手がかりを確保する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G182'
		},
		F23: {
			title: 'F23: 達成基準 1.4.2 の失敗例 － 3 秒よりも長く音声を再生していて、音声を止めるメカニズムがない',
			url: 'https://waic.jp/docs/WCAG-TECHS/F23'
		},
		G18: {
			title: 'G18: テキスト (及び文字画像) とその背景の間に、少なくとも 4.5:1 のコントラスト比を確保する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G18'
		},
		G145: {
			title: 'G145: テキスト (及び文字画像) とその背景の間に、少なくとも 3:1 のコントラスト比を確保する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G145'
		},
		F24: {
			title: 'F24: 達成基準 1.4.3、1.4.6 及び 1.4.8 の失敗例 － 背景色を指定せずに前景色を指定する (又は、前景色を指定せずに背景色を指定する)',
			url: 'https://waic.jp/docs/WCAG-TECHS/F24'
		},
		G142: {
			title: 'G142: ズーム機能をサポートする一般に入手可能なユーザエージェントのあるウェブコンテンツ技術を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G142'
		},
		G140: {
			title: 'G140: 異なる提示を可能にするために、情報と構造を表現から分離する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G140'
		},
		C22: {
			title: 'C22: テキストの視覚的提示を制御するために、CSS を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/C22'
		},
		C30: {
			title: 'C30: テキストを文字画像に置き換えるために CSS を利用し、切り替えのためのユーザインタフェースコントロールを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/C30'
		},
		G17: {
			title: 'G17: テキスト (及び文字画像) とその背景の間に、少なくとも 7:1 のコントラスト比を確保する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G17'
		},
		G56: {
			title: 'G56: 非発話音が発話音声コンテンツより少なくとも 20 デシベル低くなるように、音声ファイルを編集する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G56'
		},
		G148: {
			title: 'G148: 背景色及び文字色を指定せず、その初期設定を変更するウェブコンテンツ技術の機能を使用しない',
			url: 'https://waic.jp/docs/WCAG-TECHS/G148'
		},
		G156: {
			title: 'G156: テキストのブロックの前景及び背景を変更できる、一般に入手可能なユーザエージェントが備えるウェブコンテンツ技術を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G156'
		},
		G175: {
			title: 'G175: 背景色及び前景色のための複数色選択ツールをページ上で提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G175'
		},
		H87: {
			title: 'G146: リキッドレイアウトを使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G146'
		},
		C19: {
			title: 'C19: CSS でテキストの配置を左寄せ又は右寄せに指定する',
			url: 'https://waic.jp/docs/WCAG-TECHS/C19'
		},
		G172: {
			title: 'G172: テキストの両端揃えを解除するためのメカニズムを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G172'
		},
		G169: {
			title: 'G169: テキストを左寄せ又は右寄せにする',
			url: 'https://waic.jp/docs/WCAG-TECHS/G169'
		},
		G188: {
			title: 'G188: Providing a button on the page to increase line spaces and paragraph spaces',
			url: 'https://waic.jp/docs/WCAG-TECHS/テキストを左寄せ又は右寄せにする'
		},
		C21: {
			title: 'C21: 行送り幅を CSS で指定する',
			url: 'https://waic.jp/docs/WCAG-TECHS/C21'
		},
		SCR20: {
			title: 'SCR20: キーボードとその他のデバイス固有の機能を両方とも使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/SCR20'
		},
		F10: {
			title: 'F10: 達成基準 2.1.2 及び 適合要件 5 の失敗例 － 利用者を一つのフォーマット型の中に閉じ込める方法で、複数のコンテンツフォーマットを組み合わせている',
			url: 'https://waic.jp/docs/WCAG-TECHS/F10'
		},
		F40: {
			title: 'F40: 成基準 2.2.1 及び 達成基準 2.2.4 の失敗例 － 制限時間付きの meta 要素リダイレクトを使用している',
			url: 'https://waic.jp/docs/WCAG-TECHS/F40'
		},
		F41: {
			title: 'F41: 達成基準 2.2.1、達成基準 2.2.4、及び 達成基準 3.2.5 の失敗例 － ページを再読み込みするために、meta 要素リフレッシュを使用している',
			url: 'https://waic.jp/docs/WCAG-TECHS/F41'
		},
		SCR33: {
			title: 'SCR33: コンテンツをスクロールし、かつそれを一時停止するメカニズムを提供するためにスクリプトを使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/SCR33'
		},
		SCR22: {
			title: 'SCR22: 点滅を制御し、5 秒以内に停止させるために、スクリプトを使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/SCR22'
		},
		G187: {
			title: 'G187: ユーザエージェントによって点滅するコンテンツを停止できるウェブコンテンツ技術を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G187'
		},
		G152: {
			title: 'G152: (5 秒以内の) 数回のループ後に点滅を停止するように、アニメーション GIF を設定する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G152'
		},
		G186: {
			title: 'G186: 動きのあるコンテンツ、点滅するコンテンツ、又は自動更新するコンテンツを停止させるコントロールを使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G186'
		},
		G191: {
			title: 'G191: 点滅するコンテンツのないページを再読み込みするリンク、ボタン、又はその他のメカニズムを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G191'
		},
		F4: {
			title: 'F4: 達成基準 2.2.2 の失敗例 － 5 秒未満で停止させるメカニズムを提供せずに、text-decoration:blink を使用している',
			url: 'https://waic.jp/docs/WCAG-TECHS/F4'
		},
		F47: {
			title: 'F47: 達成基準 2.2.2 の失敗例 － blink 要素を使用している',
			url: 'https://waic.jp/docs/WCAG-TECHS/F47'
		},
		G5: {
			title: 'G5: 利用者が制限時間なしで操作を完了できるようにする',
			url: 'https://waic.jp/docs/WCAG-TECHS/G5'
		},
		SCR14: {
			title: 'SCR14: 不可欠ではないアラートの表示を任意にするために、スクリプトを使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/SCR14'
		},
		G105: {
			title: 'G105: 利用者が再認証した後に利用できるようにデータを保存する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G105'
		},
		G181: {
			title: 'G181: 利用者のデータを、再認証したページで非表示データ又は暗号化されたデータとしてエンコーディングする',
			url: 'https://waic.jp/docs/WCAG-TECHS/G181'
		},
		G19: {
			title: 'G19: どの 1 秒間においても、コンテンツに 3 回よりも多く閃光を放つコンポーネントがないことを確認する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G19'
		},
		G176: {
			title: 'G176: 閃光を放つ領域を十分に小さくする',
			url: 'https://waic.jp/docs/WCAG-TECHS/G176'
		},
		H64: {
			title: 'H64: frame 要素及び iframe 要素の title 属性を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H64'
		},
		G1: {
			title: 'G1: メインコンテンツエリアへ直接移動するリンクを各ページの先頭に追加する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G1'
		},
		G123: {
			title: 'G123:  繰り返しているコンテンツのブロックの先頭に、そのブロックの末尾へのリンクを追加する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G123'
		},
		G124: {
			title: 'G124: ページの先頭に、コンテンツの各エリアへのリンクを追加する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G124'
		},
		H69: {
			title: 'H69: コンテンツの各セクションの開始位置に見出し要素を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H69'
		},
		H25: {
			title: 'H25: title 要素を用いて、ページタイトルを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H25'
		},
		H4: {
			title: 'H4: リンク、フォームコントロール、及びオブジェクトを通して、論理的なタブ順序を作成する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H4'
		},
		H77: {
			title: 'H77: リンクテキストとそれが含まれているリスト項目とを組み合わせて、リンクの目的を特定する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H77'
		},
		H78: {
			title: 'H78: リンクテキストとそれが含まれている段落とを組み合わせて、リンクの目的を特定する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H78'
		},
		H79: {
			title: 'H79: リンクテキストとそれが含まれているデータセル及び関連づけられた見出しセルとを組み合わせて、リンクの目的を特定する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H79'
		},
		H80: {
			title: 'H80: リンクテキストと先行する見出し要素とを組み合わせて、リンクの目的を特定する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H80'
		},
		H81: {
			title: 'H81: リストが入れ子になっている状況で、親のリスト項目と結合したリンクテキストを用いて、入れ子になったリストの中でリンクの目的を特定する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H81'
		},
		H33: {
			title: 'H33: title 属性を用いて、リンクテキストを補足する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H33'
		},
		G125: {
			title: 'G125: 関連するウェブページへナビゲートするリンクを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G125'
		},
		G64: {
			title: 'G64: 目次を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G64'
		},
		G63: {
			title: 'G63: サイトマップを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G63'
		},
		G161: {
			title: 'G161: 利用者がコンテンツを見つけるのを手助けするために検索機能を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G161'
		},
		G126: {
			title: 'G126: 他の全てのウェブページへのリンク一覧を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G126'
		},
		G185: {
			title: 'G185: ホームページからサイト上の全てのウェブページにリンクする',
			url: 'https://waic.jp/docs/WCAG-TECHS/G185'
		},
		G130: {
			title: 'G130: 説明的な見出しをつける',
			url: 'https://waic.jp/docs/WCAG-TECHS/G130'
		},
		G131: {
			title: 'G131: 説明的なラベルを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G131'
		},
		G149: {
			title: 'G149: フォーカスを受け取るときに、ユーザエージェントによって強調されるユーザインタフェース コンポーネントを使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G149'
		},
		G165: {
			title: 'G165: 視認性の高いデフォルトのフォーカスインジケータが引き継がれるように、プラットフォームデフォルトのフォーカスインジケータを使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G165'
		},
		G195: {
			title: 'G195: コンテンツ制作者が提供する視認性に優れたフォーカスインジケータを使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G195'
		},
		C15: {
			title: 'C15: ユーザインタフェースコンポーネントがフォーカスを受けとったときの提示を変更するために、CSS を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/C15'
		},
		SCR31: {
			title: 'SCR31: フォーカスのある要素の背景色又はボーダーを変更するために、スクリプトを使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/SCR31'
		},
		H59: {
			title: 'H59: link 要素及びナビゲーションツールを使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H59'
		},
		H57: {
			title: 'H57: html 要素の言語属性を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H57'
		},
		H58: {
			title: 'H58: 自然言語の変更を指定するために、言語属性を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H58'
		},
		H40: {
			title: 'H40: 記述リストを使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H40'
		},
		H54: {
			title: 'H54: 単語の定義箇所を特定するために、dfn 要素を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H54'
		},
		H60: {
			title: 'H60: 用語集にリンクするために、link 要素を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H60'
		},
		G62: {
			title: 'G62: 用語集を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G62'
		},
		G70: {
			title: 'G70: オンライン辞書を検索する機能を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G70'
		},
		G102: {
			title: 'G102: 略語の元の語又は説明を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G102'
		},
		G55: {
			title: 'G55: 定義にリンクする',
			url: 'https://waic.jp/docs/WCAG-TECHS/G55'
		},
		H28: {
			title: 'H28: abbr 要素を用いて、略語の定義を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H28'
		},
		G97: {
			title: 'G97: 略語の初出時、その直前又は直後に元の語を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G97'
		},
		G86: {
			title: 'G86: 前期中等教育レベルの読解力をもつ人が理解できるテキストの要約を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G86'
		},
		G103: {
			title: 'G103: アイデア、イベント及びプロセスを説明するのに役立つ、視覚的なイラスト、写真及びシンボルを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G103'
		},
		G79: {
			title: 'G79: テキストの音声バージョンを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G79'
		},
		G153: {
			title: 'G153: テキストを読みやすくする',
			url: 'https://waic.jp/docs/WCAG-TECHS/G153'
		},
		G160: {
			title: 'G160: コンテンツを利用するために理解が不可欠な情報、アイデア及びプロセスの手話バージョンを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G160'
		},
		H62: {
			title: 'H62: ruby 要素を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H62'
		},
		G107: {
			title: 'G107: コンテキストの変化に対するトリガーとして、\'focus\' ではなく、\'activate\' を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G107'
		},
		H32: {
			title: 'H32: 送信ボタンを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H32'
		},
		G61: {
			title: 'G61: 毎回同じ相対的順序で繰り返されるコンポーネントを提示する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G61'
		},
		G197: {
			title: 'G197: 同じ機能を有するコンテンツに対して、一貫したラベル、名前 (name) 及びテキストによる代替を使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G197'
		},
		H83: {
			title: 'H83: 利用者の要求に応じて新しいウィンドウを開くために target 属性を使用して、そのことをリンクテキストで明示する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H83'
		},
		G83: {
			title: 'G83: 入力が完了していない必須項目を特定するために、テキストの説明を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G83'
		},
		G84: {
			title: 'G84: 利用者が許可された値のリストにない情報を与えた場合に、テキストの説明を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G84'
		},
		G85: {
			title: 'G85: 利用者の入力が要求されたフォーマット又は値の範囲外の場合に、テキストの説明を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G85'
		},
		G89: {
			title: 'G89: 期待されるデータ書式及び入力例を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G89'
		},
		G184: {
			title: 'G184: フォーム又はテキストフィールド一式の先頭に、必須の入力を記述するテキストの説明を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G184'
		},
		H90: {
			title: 'H90: label 要素又は legend 要素を使用して、必須のフォームコントロールを明示する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H90'
		},
		G177: {
			title: 'G177: テキストの修正候補を提示する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G177'
		},
		G98: {
			title: 'G98: 送信する前に、利用者が回答を確認及び修正できるようにする',
			url: 'https://waic.jp/docs/WCAG-TECHS/G98'
		},
		G99: {
			title: 'G99: 削除した情報を復元する機能を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G99'
		},
		G155: {
			title: 'G155: 送信ボタンに加えてチェックボックスを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G155'
		},
		G164: {
			title: 'G164: オンラインリクエスト後に、利用者がそのリクエスト (又はトランザクション) を修正又はキャンセルできる一定の時間を提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G164'
		},
		G168: {
			title: 'G168: 選択されたアクションを続行するために確認を求める',
			url: 'https://waic.jp/docs/WCAG-TECHS/G168'
		},
		G71: {
			title: 'G71: すべてのウェブページにヘルプへのリンクを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G71'
		},
		G193: {
			title: 'G193: ウェブページでアシスタントによるヘルプを提供する',
			url: 'https://waic.jp/docs/WCAG-TECHS/G193'
		},
		F77: {
			title: 'F77: 達成基準 4.1.1 の失敗例 － ID 型の値が重複している',
			url: 'https://waic.jp/docs/WCAG-TECHS/F77'
		},
		H91: {
			title: 'H91: HTML のフォームコントロール及びリンクを使用する',
			url: 'https://waic.jp/docs/WCAG-TECHS/H91'
		},
		F102: {
			title: 'F102: 達成基準 1.4.10 の失敗例 － コンテンツがリフローしたとき、コンテンツが消えて利用できなくなる',
			url: 'https://waic.jp/docs/WCAG21/Techniques/failures/F102'
		},
		F103: {
			title: 'F103: 達成基準 4.1.3 の失敗例 － 役割 (role) 又はプロパティを通してプログラムによる解釈が可能でないステータスメッセージを提供する',
			url: 'https://waic.jp/docs/WCAG21/Techniques/failures/F103'
		},
		F104: {
			title: 'F104: 達成基準 1.4.12 の失敗例 － テキストの間隔を調整したときにコンテンツが切り取られたり重なったりする',
			url: 'https://waic.jp/docs/WCAG21/Techniques/failures/F104'
		},
		F105: {
			title: 'F105: 達成基準 2.5.1 の失敗例 － 単純なポインタによる代替なしに、軌跡ベースのジェスチャによる機能を提供している',
			url: 'https://waic.jp/docs/WCAG21/Techniques/failures/F105'
		},
		F106: {
			title: 'F106: 達成基準 2.5.4 の失敗例 － 動きによる起動を解除することができない',
			url: 'https://waic.jp/docs/WCAG21/Techniques/failures/F106'
		},
		G216: {
			title: 'G216: コントロールスライダーのためにアクティブにするシングルポイントを提供する',
			url: 'https://waic.jp/docs/WCAG21/Techniques/general/G216'
		},
		G215: {
			title: 'G215: 軌跡ベース又はマルチポイントのジェスチャと同等の結果を得られるコントロールを提供する',
			url: 'https://waic.jp/docs/WCAG21/Techniques/general/G215'
		},
		F100: {
			title: 'F100: 達成基準 1.3.4 の失敗例 － デバイスの向きを変更するように促すメッセージが表示される',
			url: 'https://waic.jp/docs/WCAG21/Techniques/failures/F100'
		},
		G214: {
			title: 'G214: 別の方法で制限されている、異なる向きのコンテンツへのアクセスを許可するコントロールを使用する',
			url: 'https://waic.jp/docs/WCAG21/Techniques/general/G214'
		},
		C40: {
			title: 'C40: すべてのコンポーネントで十分なコントラスト比を確保するために 2 色のフォーカスインジケータを作成する',
			url: 'https://waic.jp/docs/WCAG21/Techniques/css/C40'
		},
		F99: {
			title: 'F99: 達成基準 2.1.4 の失敗例－停止又は再割り当て不可能な文字キーショートカットが実装されている',
			url: 'https://waic.jp/docs/WCAG21/Techniques/failures/F99'
		},
		SCR39: {
			title: 'SCR39: フォーカス又はホバー時のコンテンツをホバー可能、非表示可能及び表示が継続されるようにする',
			url: 'https://waic.jp/docs/WCAG21/Techniques/client-side-script/SCR39'
		},
		G212: {
			title: 'G212: ネイティブコントロールを使用して、アップイベントで機能がトリガーされるようにする',
			url: 'https://waic.jp/docs/WCAG21/Techniques/general/G212'
		},
		F98: {
			title: 'F98: 達成基準 2.5.6 の失敗例 － タッチスクリーンデバイスにおいてインタラクションがタッチのみに限定されている',
			url: 'https://waic.jp/docs/WCAG21/Techniques/failures/F98'
		},
		G213: {
			title: 'G213: 動きで作動させる入力のために、従来のコントロール及びアプリケーション設定を提供する',
			url: 'https://waic.jp/docs/WCAG21/Techniques/general/G213'
		},
		ARIA24: {
			title: 'ARIA24: アイコンフォントを意味的に識別するために role="img" を使用する',
			url: 'https://waic.jp/docs/WCAG21/Techniques/aria/ARIA24'
		},
		F97: {
			title: 'F97: 達成基準 1.3.4 の失敗例 － 表示の向きを縦向き (portrait) 又は横向き (landscape) に固定している',
			url: 'https://waic.jp/docs/WCAG21/Techniques/failures/F97'
		},
		F52: {
			title: 'F52: 達成基準 3.2.1 及び達成基準 3.2.5 の失敗例 － 新しいページを読み込むのと同時に、新しいウィンドウを開いている',
			url: 'https://waic.jp/docs/WCAG21/Techniques/failures/F52'
		},
		G209: {
			title: 'G209: 隣り合う色の境界に十分なコントラストを提供する',
			url: 'https://waic.jp/docs/WCAG21/Techniques/general/G209'
		},
		C39: {
			title: 'C39: モーションの防止に CSS reduce-motion クエリを使用する',
			url: 'https://waic.jp/docs/WCAG21/Techniques/css/C39'
		},
		G207: {
			title: 'G207: アイコンに対して 3:1 のコントラスト比を確保する',
			url: 'https://waic.jp/docs/WCAG21/Techniques/general/G207'
		},
		C38: {
			title: 'C38: CSS width、max-width、及び flexbox を用いたラベルと入力欄の配置',
			url: 'https://waic.jp/docs/WCAG21/Techniques/css/C38'
		},
		C34: {
			title: 'C34: 固定されていないスティッキーヘッダー/フッターに、メディアクエリーを利用する',
			url: 'https://waic.jp/docs/WCAG21/Techniques/css/C34'
		},
		C36: {
			title: 'C36: テキスト間隔を上書きできるようにする',
			url: 'https://waic.jp/docs/WCAG21/Techniques/css/C36'
		},
		C37: {
			title: 'C37: 画像を収めるために、CSS の max-width 及び height を使用する',
			url: 'https://waic.jp/docs/WCAG21/Techniques/css/C37'
		},
		F95: {
			title: 'F95: 達成基準 1.4.13 の失敗例 － ホバーによって表示されるコンテンツがホバーできない',
			url: 'https://waic.jp/docs/WCAG21/Techniques/failures/F95'
		},
		F96: {
			title: 'F96: 達成基準 2.5.3 の失敗例 - アクセシブルな名前 (accessible name) が可視ラベルのテキストを含んでいない',
			url: 'https://waic.jp/docs/WCAG21/Techniques/failures/F96'
		}
	};
}
