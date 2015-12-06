class Comment < ActiveRecord::Base
  validates :body, presence: true
  belongs_to :post
  belongs_to :user
  validates :post_id, presence: true

  after_save :send_notification


  protected
  def send_notification
    if post.user.present?
      UserMailer.comment_notification(post,self,post.user,:author).deliver_now
    end
    post.subscribers.each {|s| UserMailer.comment_notification(post,self,s,:subscriber).deliver_now}
  end
end
