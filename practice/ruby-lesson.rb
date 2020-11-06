# # 第5章 問1
# while true do
#     result = rand(0..9)

#     puts "0~9の数字を入力してください"
#     input = gets.to_i

#     if input == result
#         puts "正解！#{result}でした!"
#         exit
#     elsif input <= result
#         puts "#{result}より小さい数です"
#     else
#         puts "#{result}より大きい数です"
#     end
# end

# #　問2
# for i in 1..50
#     if i % 3 == 0 || i.to_s.include?("3")
#         puts "Aho"
#     else
#         puts i
#     end
# end

# # 問3
# def register_review(reviews)   
#     puts "商品名を入力してください"
#     input_name = gets.chomp
#     puts "感想を入力してください"
#     input_review = gets.chomp

#     review = { name: input_name, review: input_review }
#     reviews << review
# end

# reviews = []

# def show_reviews(reviews)
#     puts "----------------------------"
#     reviews.each do |review|
#         puts "商品名：#{ review[:name] }".chomp
#         puts "感想：#{ review[:review] }".chomp
#     end
# end

# while true do
#     puts "番号を入力してください"
#     puts "[1] レビューを登録する"
#     puts "[2] レビューの一覧を見る"
#     puts "[3] アプリを終了する。"

#     input = gets.to_i

#     case input
#     when 1
#         register_review(reviews)
#     when 2
#         show_reviews(reviews)
#     when 3
#         exit
#     end
# end

