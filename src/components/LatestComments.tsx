import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

interface Comment {
  id: string;
  author: {
    name: string;
    avatar?: string;
  };
  newsId: string;
  newsTitle: string;
  content: string;
  createdAt: string;
}

interface LatestCommentsProps {
  comments: Comment[];
}

const LatestComments = ({ comments }: LatestCommentsProps) => {
  return (
    <Card className="border-primary/20 shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl flex items-center gap-2">
          <Icon name="MessageSquare" className="h-5 w-5 text-primary" />
          Последние комментарии
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3 group">
            <Avatar className="h-8 w-8">
              <AvatarImage src={comment.author.avatar} />
              <AvatarFallback className="bg-primary/10 text-primary">
                {comment.author.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1 flex-1">
              <div className="flex items-center text-sm">
                <span className="font-medium">{comment.author.name}</span>
                <Icon
                  name="ChevronRight"
                  className="h-4 w-4 mx-1 text-muted-foreground"
                />
                <Link
                  to={`/news/${comment.newsId}`}
                  className="text-muted-foreground hover:text-primary line-clamp-1 flex-1"
                >
                  {comment.newsTitle}
                </Link>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {comment.content}
              </p>
              <div className="flex items-center text-xs text-muted-foreground">
                <span>{comment.createdAt}</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    className="text-muted-foreground hover:text-primary"
                    aria-label="Like"
                  >
                    <Icon name="ThumbsUp" className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <Link
          to="/comments"
          className="text-sm text-primary hover:text-primary/80 flex items-center justify-center mt-2"
        >
          Все комментарии
          <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default LatestComments;
