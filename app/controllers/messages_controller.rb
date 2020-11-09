class MessagesController < ApplicationController
    def index
        @messages = Message.all.includes(:user)
        @message = Message.new
    end

    def create
        message = Message.new(create_params)
        if message.save
            redirect_to root_path, notice: 'メッセージを送信しました'
        else
            redirect_to root_path, notice: 'メッセージの送信に失敗しました'
        end
    end

    def edit
        @message = Message.find(params[:id])
    end

    def update
        @message = Message.find(params[:id])
        if @message.update(update_params)
            redirect_to root_path, notice: 'メッセージを更新しました'
        else
            redirect_to root_path, notixe: 'メッセージの更新に失敗しました'
        end
    end

    def destroy
        @message = Message.find(params[:id])
        if @message.destroy
            redirect_to root_path, notice: '削除しました'
        else
            redirect_to root_path, notice: 'メッセージの削除に失敗しました'
        end
    end

    private

        def create_params
            params.require(:message).permit(:content).merge(user_id: 1)
        end

        def update_params
            params.require(:message).permit(:content)
        end
end
