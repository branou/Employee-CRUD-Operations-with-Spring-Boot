package dev.himbra.employeemanagementsystem.authentication;

import dev.himbra.employeemanagementsystem.admin.Admin;
import dev.himbra.employeemanagementsystem.admin.AdminRepository;
import dev.himbra.employeemanagementsystem.role.Role;
import dev.himbra.employeemanagementsystem.role.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;
    public AuthenticationResponse login(LoginRequest loginRequest){
        Authentication authentication=authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(),loginRequest.getPassword()));
        String token=null;
        try{
        token=jwtService.generateToken((Admin)authentication.getPrincipal());}
        catch (Exception e){e.printStackTrace();}
        return AuthenticationResponse.builder().token(token).build();
    }
    public void register(RegisterRequest registerRequest){
        Role role = roleRepository.findByName("ADMIN").orElseThrow(() -> new IllegalStateException("ROLE user was not initiated"));
        Admin admin =Admin.builder().firstname(registerRequest.getFirstname())
                .lastname(registerRequest.getLastname()).email(registerRequest.getEmail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .roles(List.of(role))
                .build();
        adminRepository.save(admin);
    }
}
