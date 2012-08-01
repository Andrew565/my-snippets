master = 'production'

namespace :andrew do
  # Git stuff
  namespace :git do
    task :log do
      exec "git smart-log"
    end
    task :status do
      exec "git status"
    end
    task :s do
      exec "git status"
    end
    task :squash do
      exec "git rebase -i HEAD^"
    end
    task :start, [:branch] do |t, args|
      return "No branch name specified" if !args[:branch]
      exec "git switch #{master} && git smart-pull && git sprout #{master} #{args[:branch]}"
    end
    task :merge_into, [:branch, :push] do |t, args|
      args.with_defaults(:push => false)
      return "No branch specified" if !args[:branch]
      current_branch = `git symbolic-ref HEAD 2> /dev/null`
      current_branch.gsub!('refs/heads/', '').strip!
      command = "git switch #{args[:branch]} && git smart-pull && git smart-merge #{current_branch}"
      command = command + " && git push origin #{args[:branch]}" if args[:push].to_bool
      exec command
    end
    task :merge_and_deploy, [:branch] do |t, args|
      args.with_defaults(:branch => "staging")
      current_branch = `git symbolic-ref HEAD 2> /dev/null`
      current_branch.gsub!('refs/heads/', '').strip!
      exec "rake andrew:git:merge_into[#{args[:branch]},true] && rake deploy:#{args[:branch]}"
    end
  end
end