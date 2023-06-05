# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)Class BlogPostsController is a child of ApplicationController and will inherit certain properties.
class BlogPostsController < ApplicationController
  def index
    # ---2) Declaration of an instance variable that will display all of the instances in BlogPost
    @posts = BlogPost.all
  end

  # ---3) Declaration of a new method: show
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Declaration of a new method: new
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Instance variable used to create a new object in BlogPost
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) Instance variable that is storing the information that will be passed as a param.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Updates BlogPost with the title and content params that are passed through under private.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) Defines where the user will go after calling on the destroy method
      redirect_to blog_posts_path
    end
  end

  # ---9) Defines where the strong params begin, and where the browser will stop displaying information.
  private
  def blog_post_params
    # ---10) Declares the params to be passed into BlogPost - title and content.
    params.require(:blog_post).permit(:title, :content)
  end
end
