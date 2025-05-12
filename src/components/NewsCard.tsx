import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface NewsCardProps {
  id: string;
  title: string;
  summary: string;
  category: string;
  imageUrl: string;
  publishedAt: string;
  author: string;
  commentsCount: number;
  likes: number;
  featured?: boolean;
}

type ReactionType = "👍" | "👎" | "❤️" | "😂" | "😮" | "😢" | "😡";

const REACTIONS: ReactionType[] = ["👍", "👎", "❤️", "😂", "😮", "😢", "😡"];

const NewsCard = ({
  id,
  title,
  summary,
  category,
  imageUrl,
  publishedAt,
  author,
  commentsCount,
  likes,
  featured = false,
}: NewsCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<
    Array<{
      id: string;
      author: string;
      text: string;
      timestamp: string;
      reactions: Record<ReactionType, number>;
    }>
  >([]);
  const [reactions, setReactions] = useState<Record<ReactionType, number>>({
    "👍": Math.floor(Math.random() * 15),
    "👎": Math.floor(Math.random() * 5),
    "❤️": Math.floor(Math.random() * 10),
    "😂": Math.floor(Math.random() * 8),
    "😮": Math.floor(Math.random() * 6),
    "😢": Math.floor(Math.random() * 4),
    "😡": Math.floor(Math.random() * 3),
  });
  const [userReaction, setUserReaction] = useState<ReactionType | null>(null);

  const handleSubmitComment = () => {
    if (comment.trim()) {
      const newComment = {
        id: Date.now().toString(),
        author: "Гость",
        text: comment,
        timestamp: "Только что",
        reactions: {
          "👍": 0,
          "👎": 0,
          "❤️": 0,
          "😂": 0,
          "😮": 0,
          "😢": 0,
          "😡": 0,
        },
      };
      setComments([newComment, ...comments]);
      setComment("");
    }
  };

  const handleReaction = (reaction: ReactionType) => {
    if (userReaction === reaction) {
      setReactions({
        ...reactions,
        [reaction]: reactions[reaction] - 1,
      });
      setUserReaction(null);
    } else {
      if (userReaction) {
        setReactions({
          ...reactions,
          [userReaction]: reactions[userReaction] - 1,
          [reaction]: reactions[reaction] + 1,
        });
      } else {
        setReactions({
          ...reactions,
          [reaction]: reactions[reaction] + 1,
        });
      }
      setUserReaction(reaction);
    }
  };

  const handleCommentReaction = (commentId: string, reaction: ReactionType) => {
    setComments(
      comments.map((c) => {
        if (c.id === commentId) {
          return {
            ...c,
            reactions: {
              ...c.reactions,
              [reaction]: c.reactions[reaction] + 1,
            },
          };
        }
        return c;
      }),
    );
  };

  return (
    <Card
      className={`overflow-hidden transition-all hover:shadow-lg animate-fade-in border-border/30 hover:border-primary/50 mb-6 ${
        featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
      }`}
    >
      <div className={`${featured ? "md:order-2" : ""}`}>
        <div className="aspect-video relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            {category}
          </Badge>
        </div>
      </div>

      <div className="flex flex-col h-full">
        <CardHeader className="p-4 pb-2">
          <div className="flex items-center text-xs text-muted-foreground mb-2">
            <span>{publishedAt}</span>
            <span className="mx-2">•</span>
            <span>{author}</span>
          </div>
          <h3 className="font-playfair text-lg md:text-xl font-bold leading-tight text-foreground">
            {title}
          </h3>
        </CardHeader>

        <CardContent className="p-4 pt-0 flex-grow">
          <p className="text-muted-foreground line-clamp-3">{summary}</p>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex-col items-start border-t border-border/30">
          <div className="flex items-center text-sm text-muted-foreground w-full mb-3">
            <div className="flex items-center mr-4">
              <Icon name="MessageSquare" className="mr-1 h-4 w-4" />
              <span>{commentsCount + comments.length}</span>
            </div>
            <div className="flex items-center">
              <Icon name="Heart" className="mr-1 h-4 w-4" />
              <span>{likes}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="ml-auto"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <>
                  <Icon name="ChevronUp" className="h-4 w-4 mr-1" />
                  Свернуть
                </>
              ) : (
                <>
                  <Icon name="ChevronDown" className="h-4 w-4 mr-1" />
                  Развернуть
                </>
              )}
            </Button>
          </div>

          {/* Реакции */}
          <div className="flex flex-wrap gap-2 w-full mb-4">
            {REACTIONS.map((reaction) => (
              <Button
                key={reaction}
                variant={userReaction === reaction ? "secondary" : "outline"}
                size="sm"
                className="px-2 py-1 h-8"
                onClick={() => handleReaction(reaction)}
              >
                <span className="text-lg mr-1">{reaction}</span>
                <span className="text-xs">{reactions[reaction]}</span>
              </Button>
            ))}
          </div>

          {expanded && (
            <div className="w-full space-y-4 mt-2">
              <div className="bg-muted/20 p-3 rounded-md">
                <h4 className="text-sm font-semibold mb-2">
                  Оставить комментарий
                </h4>
                <Textarea
                  placeholder="Напишите ваш комментарий..."
                  className="mb-2 bg-muted/50 border-border/30"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <Button onClick={handleSubmitComment}>
                  <Icon name="Send" className="h-4 w-4 mr-2" />
                  Отправить
                </Button>
              </div>

              {/* Комментарии */}
              {comments.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold">
                    Комментарии ({comments.length})
                  </h4>
                  {comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="bg-muted/10 p-3 rounded-md"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="bg-primary/10 text-primary text-xs">
                            {comment.author[0].toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">
                          {comment.author}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {comment.timestamp}
                        </span>
                      </div>
                      <p className="text-sm mb-2">{comment.text}</p>
                      <div className="flex flex-wrap gap-1">
                        {REACTIONS.map((reaction) => (
                          <button
                            key={reaction}
                            className={`text-xs px-1.5 py-0.5 rounded-md ${
                              comment.reactions[reaction] > 0
                                ? "bg-primary/10 text-primary"
                                : "bg-muted/20 text-muted-foreground"
                            }`}
                            onClick={() =>
                              handleCommentReaction(comment.id, reaction)
                            }
                          >
                            {reaction} {comment.reactions[reaction] || ""}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </CardFooter>
      </div>
    </Card>
  );
};

export default NewsCard;
