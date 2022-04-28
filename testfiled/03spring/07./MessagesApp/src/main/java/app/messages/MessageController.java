package app.messages;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;

@Controller
@RequestMapping("/messages")
public class MessageController {

  private MessageService messageService;

  public MessageController(MessageService messageService) {
    this.messageService = messageService;
  }

  @GetMapping("/welcome")
  public String welcome(Model model) {
    System.out.println("/welcome 실행 .....");
    // 리소스 templates 아래 welcome.html 로 message 라는 attr 로 담아 보내고 th로 사용
    model.addAttribute("message", "안녕하세요, Spring Boot! welcome 경로에 오셨습니다.");
    return "welcome";
  }

  @PostMapping("")
  @ResponseBody
  public ResponseEntity<Message> saveMessage(@RequestBody MessageData data) {
    Message saved = messageService.save(data.getText());
    if (saved == null) {
      return ResponseEntity.status(500).build();
    }
    return ResponseEntity.ok(saved);
  }
}
