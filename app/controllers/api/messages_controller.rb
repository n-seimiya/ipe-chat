class Api::MessagesController < ApplicationController

    def index
        last_message = params[:last_message]
        @messages = Message.includes(:user).where('id > ?', last_message)
        @current_user = current_user.id
    end

    def create
        @message = Message.new(create_params)
        @message.save
        @current_user = current_user.id
    end

    private

        def create_params
            params.require(:message).permit(:content).merge(user_id: current_user.id)
        end
    
end