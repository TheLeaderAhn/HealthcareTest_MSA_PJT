package app.messages;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/messages")
public class MessageController {

  @GetMapping("/welcome")
  public String welcome(Model model) {
    System.out.println("/welcome 실행 .....");
    // 리소스 templates 아래 welcome.html 로 message 라는 attr 로 담아 보내고 th로 사용
    model.addAttribute("message", "안녕하세요, Spring Boot! welcome 경로에 오셨습니다.");
    return "welcome";
  }
}
