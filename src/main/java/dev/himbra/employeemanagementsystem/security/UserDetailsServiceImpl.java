package dev.himbra.employeemanagementsystem.security;

import dev.himbra.employeemanagementsystem.admin.Admin;
import dev.himbra.employeemanagementsystem.admin.AdminRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {
    private AdminRepository adminRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return adminRepository.findByEmail(username).orElseThrow(()->new UsernameNotFoundException("username not Found!"));
    }
}
