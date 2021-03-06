package app.messages;

import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Date;

public class AuditingFilter extends GenericFilterBean {
  @Override
  public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
    HttpServletRequest request = (HttpServletRequest) req;
    long start = new Date().getTime();
    logger.debug("start Time ::: " + start);
    chain.doFilter(req, res);
    long elapsed = new Date().getTime() - start;
    logger.debug("Request[URI = " + request.getRequestURI() + "\r\n...method=" + request.getMethod() +
      "] " + elapsed + " ms 걸림");
  }

}
